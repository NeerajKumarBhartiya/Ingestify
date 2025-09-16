import type { Request, Response } from "express"
import { createProduct, getProducts } from "../service/product.service"
import { verifyShopifyWebhook } from "../utils/webhook"
import prisma from "@repo/db"

async function createProductWebhook(req: Request, res: Response) {
  try {
    const receivedHmac = req.get("X-Shopify-Hmac-Sha256")
    const secret = process.env.SHOPIFY_WEBHOOK_SECRET

    if (!secret) return res.status(500).json({ error: "Webhook secret not configured" })

    const bodyBuffer = req.body as Buffer
    if (!verifyShopifyWebhook(bodyBuffer, receivedHmac || "", secret)) {
      return res.status(401).json({ error: "Unauthorized" })
    }

    const shopifyProduct = JSON.parse(bodyBuffer.toString())
    const shopDomain = req.get("X-Shopify-Shop-Domain")
    let tenant = await prisma.tenant.findFirst({ where: { name: shopDomain || "" } })
    if (!tenant) {
      tenant = await prisma.tenant.create({ data: { name: shopDomain || "" } })
    }

    const product = await createProduct(shopifyProduct, tenant.id)
    console.log("Product saved:", product)
    return res.status(201).json({ message: "Product created", product })
  } catch (err) {
    console.error("Product webhook error:", err)
    return res.status(500).json({ error: "Internal server error" })
  }
}

async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await getProducts()
    return res.status(200).json(products)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "Failed to fetch products" })
  }
}

export { createProductWebhook, getAllProducts }
