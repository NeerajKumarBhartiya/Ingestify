import crypto from "crypto"

export function verifyShopifyWebhook(rawBody: Buffer, receivedHmac: string, secret: string): boolean {
  console.log("[v0] Webhook verification debug:")

  if (!receivedHmac || !secret) {
    console.log("[v0] Verification failed: Missing HMAC or secret")
    return false
  }

  const secretFormats = [
    { name: "raw string", secret: secret },
    {
      name: "base64 decoded",
      secret: (() => {
        try {
          return Buffer.from(secret, "base64")
        } catch {
          return null
        }
      })(),
    },
    {
      name: "base64 decoded",
      secret: (() => {
        try {
          return Buffer.from(secret, "base64")
        } catch {
          return null
        }
      })(),
    },
    {
      name: "base64 decoded",
      secret: (() => {
        try {
          return Buffer.from(secret, "base64")
        } catch {
          return null
        }
      })(),
    },
  ]

  console.log("[v0] Body buffer first 50 bytes (hex):", rawBody.subarray(0, 50).toString("hex"))
  console.log("[v0] Received HMAC:", receivedHmac)
  console.log("[v0] Secret exists:", !!secret)
  console.log("[v0] Secret length:", secret.length)

  for (const format of secretFormats) {
    if (!format.secret) continue

    try {
      const generatedHmac = crypto.createHmac("sha256", format.secret).update(rawBody).digest("base64")
      console.log(`[v0] Calculated HMAC (${format.name}):`, generatedHmac)

      if (generatedHmac === receivedHmac) {
        console.log(`[v0] HMAC match: true (${format.name})`)
        return true
      }

      // Also try buffer comparison for extra safety
      try {
        const receivedBuffer = Buffer.from(receivedHmac, "base64")
        const generatedBuffer = Buffer.from(generatedHmac, "base64")

        if (
          receivedBuffer.length === generatedBuffer.length &&
          crypto.timingSafeEqual(receivedBuffer, generatedBuffer)
        ) {
          console.log(`[v0] HMAC match: true (${format.name} - buffer comparison)`)
          return true
        }
      } catch (bufferError) {
        console.log(`[v0] Buffer comparison failed for ${format.name}:`, bufferError)
      }
    } catch (error) {
      console.log(`[v0] HMAC calculation failed for ${format.name}:`, error)
    }
  }

  console.log("[v0] HMAC match: false")
  return false
}

export function debugShopifyWebhook(rawBody: Buffer, receivedHmac: string, secret: string): void {
  console.log("[v0] === SHOPIFY WEBHOOK DEBUG ===")
  console.log("[v0] Raw body length:", rawBody.length)
  console.log("[v0] Raw body (first 100 chars):", rawBody.toString().substring(0, 100))
  console.log("[v0] Raw body (hex, first 50 bytes):", rawBody.subarray(0, 50).toString("hex"))
  console.log("[v0] Received HMAC:", receivedHmac)
  console.log("[v0] Secret (first 10 chars):", secret.substring(0, 10) + "...")
  console.log("[v0] Secret length:", secret.length)

  // Try to decode the received HMAC
  try {
    const decodedHmac = Buffer.from(receivedHmac, "base64")
    console.log("[v0] Decoded HMAC length:", decodedHmac.length)
    console.log("[v0] Decoded HMAC (hex):", decodedHmac.toString("hex"))
  } catch (error) {
    console.log("[v0] Failed to decode received HMAC:", error)
  }

  // Test with different body encodings
  const bodyAsString = rawBody.toString()
  const bodyAsUtf8 = rawBody.toString("utf8")

  console.log("[v0] Body as string === Body as UTF8:", bodyAsString === bodyAsUtf8)

  // Test HMAC with raw secret
  const hmacRaw = crypto.createHmac("sha256", secret).update(rawBody).digest("base64")
  console.log("[v0] HMAC with raw secret:", hmacRaw)

  // Test HMAC with base64 decoded secret
  try {
    const secretDecoded = Buffer.from(secret, "base64")
    const hmacDecoded = crypto.createHmac("sha256", secretDecoded).update(rawBody).digest("base64")
    console.log("[v0] HMAC with base64 decoded secret:", hmacDecoded)
  } catch (error) {
    console.log("[v0] Failed to decode secret as base64:", error)
  }

  console.log("[v0] === END DEBUG ===")
}
