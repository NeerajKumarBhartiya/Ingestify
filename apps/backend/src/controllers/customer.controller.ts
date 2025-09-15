import type { Request, Response } from "express"
import { createCustomer } from "../service/customer.service"
import { verifyShopifyWebhook, debugShopifyWebhook } from "../utils/webhook"
import prisma from "@repo/db"

async function createCustomerWebhook(req: Request, res: Response) {
  try {
    console.log("[v0] Webhook request received:")
    console.log("[v0] Headers:", JSON.stringify(req.headers, null, 2))
    console.log("[v0] Body type:", typeof req.body)
    console.log("[v0] Body is Buffer:", Buffer.isBuffer(req.body))

    const receivedHmac = req.get("X-Shopify-Hmac-Sha256")
    const secret = process.env.SHOPIFY_WEBHOOK_SECRET

    console.log("[v0] Environment check:")
    console.log("[v0] SHOPIFY_WEBHOOK_SECRET exists:", !!secret)
    console.log("[v0] X-Shopify-Hmac-Sha256 header:", receivedHmac)

    if (!secret) {
      console.log("[v0] Error: Webhook secret not configured")
      return res.status(500).json({ error: "Webhook secret not configured" })
    }

    debugShopifyWebhook(req.body, receivedHmac || "", secret)

    if (!verifyShopifyWebhook(req.body, receivedHmac || "", secret)) {
      console.log("[v0] Error: HMAC verification failed")
      return res.status(401).json({ error: "Unauthorized" })
    }

    console.log("[v0] HMAC verification successful")
    const shopifyCustomer = JSON.parse(req.body.toString())
    const shopDomain = req.get("X-Shopify-Shop-Domain")
    const tenant = await prisma.tenant.findFirst({
      where: { name: shopDomain },
    })

    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" })
    }

    const customer = await createCustomer(shopifyCustomer, tenant.id)
    return res.status(201).json({ message: "Customer created", customer })
  } catch (err) {
    console.error("[v0] Customer webhook error:", err)
    res.status(500).json({ error: "Internal server error" })
  }
}

export { createCustomerWebhook }
