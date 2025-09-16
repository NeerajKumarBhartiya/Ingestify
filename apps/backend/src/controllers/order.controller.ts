import type { Request, Response } from "express"
import { createOrder, getOrders } from "../service/order.service"
import { verifyShopifyWebhook } from "../utils/webhook"
import prisma from "@repo/db"

async function createOrderWebhook(req: Request, res: Response) {
  try {
    const receivedHmac = req.get("X-Shopify-Hmac-Sha256")
    const secret = process.env.SHOPIFY_WEBHOOK_SECRET

    if (!secret) return res.status(500).json({ error: "Webhook secret not configured" })

    const bodyBuffer = req.body as Buffer
    if (!verifyShopifyWebhook(bodyBuffer, receivedHmac || "", secret)) {
      return res.status(401).json({ error: "Unauthorized" })
    }

    const shopifyOrder = JSON.parse(bodyBuffer.toString())
    const shopDomain = req.get("X-Shopify-Shop-Domain")
    let tenant = await prisma.tenant.findFirst({ where: { name: shopDomain || "" } })
    if (!tenant) {
      tenant = await prisma.tenant.create({ data: { name: shopDomain || "" } })
    }

    const order = await createOrder(shopifyOrder, tenant.id)
    console.log("Order saved:", order)
    return res.status(201).json({ message: "Order created", order })
  } catch (err) {
    console.error("Order webhook error:", err)
    return res.status(500).json({ error: "Internal server error" })
  }
}

async function getAllOrders(req: Request, res: Response) {
  try {
    const orders = await getOrders()
    return res.status(200).json(orders)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "Failed to fetch orders" })
  }
}

export { createOrderWebhook, getAllOrders }
