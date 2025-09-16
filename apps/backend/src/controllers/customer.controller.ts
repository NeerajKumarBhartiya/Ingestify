import type { Request, Response } from "express"
import { createCustomer, getCustomers } from "../service/customer.service"
import { verifyShopifyWebhook } from "../utils/webhook"
import prisma from "@repo/db"

async function createCustomerWebhook(req: Request, res: Response) {
  try {
    const receivedHmac = req.get("X-Shopify-Hmac-Sha256")
    const secret = process.env.SHOPIFY_WEBHOOK_SECRET
    if (!secret) return res.status(500).json({ error: "Webhook secret not configured" })

    console.log("Body is Buffer?", Buffer.isBuffer(req.body))
    const bodyBuffer = req.body as Buffer

    if (!verifyShopifyWebhook(bodyBuffer, receivedHmac || "", secret)) {
      console.log("HMAC verification failed")
      return res.status(401).json({ error: "Unauthorized" })
    }

    const shopifyCustomer = JSON.parse(bodyBuffer.toString())
    console.log("Received Shopify customer:", shopifyCustomer)

    const shopDomain = req.get("X-Shopify-Shop-Domain")
    const tenant = await prisma.tenant.findFirst({ where: { name: shopDomain || "" } })
    if (!tenant) {
      console.log("Tenant not found for shopDomain:", shopDomain)
      return res.status(404).json({ error: "Tenant not found" })
    }

    let customer
    try {
      customer = await createCustomer(shopifyCustomer, tenant.id)
      console.log("Customer saved successfully:", customer)
    } catch (prismaErr) {
      console.error("Prisma createCustomer error:", prismaErr)
      return res.status(500).json({ error: "Failed to save customer" })
    }

    return res.status(201).json({ message: "Customer created", customer })
  } catch (err) {
    console.error("Customer webhook unexpected error:", err)
    return res.status(500).json({ error: "Internal server error" })
  }
}

async function getAllCustomers(req: Request, res: Response) {
  try {
    const customers = await getCustomers()
    return res.status(200).json(customers)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "Failed to fetch customers" })
  }
}

export { createCustomerWebhook, getAllCustomers }
