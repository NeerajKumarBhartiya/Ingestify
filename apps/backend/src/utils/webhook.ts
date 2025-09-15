import crypto from "crypto"

export function verifyShopifyWebhook(rawBody: Buffer, receivedHmac: string, secret: string): boolean {
  console.log("[v0] Webhook verification debug:")

  if (!receivedHmac || !secret) {
    console.log("[v0] Verification failed: Missing HMAC or secret")
    return false
  }

  // Clean the received HMAC (remove any prefixes like 'sha256=')
  const cleanHmac = receivedHmac.replace(/^sha256=/, '')

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
      name: "hex decoded",
      secret: (() => {
        try {
          return Buffer.from(secret, "hex")
        } catch {
          return null
        }
      })(),
    },
  ]

  console.log("[v0] Body buffer first 50 bytes (hex):", rawBody.subarray(0, 50).toString("hex"))
  console.log("[v0] Received HMAC:", cleanHmac)
  console.log("[v0] Secret exists:", !!secret)
  console.log("[v0] Secret length:", secret.length)

  for (const format of secretFormats) {
    if (!format.secret) continue

    try {
      // Try both base64 and hex digest formats
      const digestFormats = ['base64', 'hex'] as const
      
      for (const digestFormat of digestFormats) {
        const generatedHmac = crypto.createHmac("sha256", format.secret).update(rawBody).digest(digestFormat)
        console.log(`[v0] Calculated HMAC (${format.name}, ${digestFormat}):`, generatedHmac)

        // Direct string comparison
        if (generatedHmac === cleanHmac) {
          console.log(`[v0] HMAC match: true (${format.name}, ${digestFormat})`)
          return true
        }

        // Timing-safe comparison for base64
        if (digestFormat === 'base64') {
          try {
            const receivedBuffer = Buffer.from(cleanHmac, "base64")
            const generatedBuffer = Buffer.from(generatedHmac, "base64")

            if (
              receivedBuffer.length === generatedBuffer.length &&
              crypto.timingSafeEqual(receivedBuffer, generatedBuffer)
            ) {
              console.log(`[v0] HMAC match: true (${format.name}, ${digestFormat} - buffer comparison)`)
              return true
            }
          } catch (bufferError) {
            console.log(`[v0] Buffer comparison failed for ${format.name}:`, bufferError)
          }
        }
        
        // Timing-safe comparison for hex
        if (digestFormat === 'hex') {
          try {
            const receivedBuffer = Buffer.from(cleanHmac, "hex")
            const generatedBuffer = Buffer.from(generatedHmac, "hex")

            if (
              receivedBuffer.length === generatedBuffer.length &&
              crypto.timingSafeEqual(receivedBuffer, generatedBuffer)
            ) {
              console.log(`[v0] HMAC match: true (${format.name}, ${digestFormat} - buffer comparison)`)
              return true
            }
          } catch (bufferError) {
            console.log(`[v0] Buffer comparison failed for ${format.name}:`, bufferError)
          }
        }
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

  // Clean the HMAC
  const cleanHmac = receivedHmac.replace(/^sha256=/, '')
  console.log("[v0] Clean HMAC:", cleanHmac)

  // Try to decode the received HMAC
  try {
    const decodedHmac = Buffer.from(cleanHmac, "base64")
    console.log("[v0] Decoded HMAC length:", decodedHmac.length)
    console.log("[v0] Decoded HMAC (hex):", decodedHmac.toString("hex"))
  } catch (error) {
    console.log("[v0] Failed to decode received HMAC as base64:", error)
  }

  try {
    const decodedHmac = Buffer.from(cleanHmac, "hex")
    console.log("[v0] Decoded HMAC from hex length:", decodedHmac.length)
    console.log("[v0] Decoded HMAC from hex (hex):", decodedHmac.toString("hex"))
  } catch (error) {
    console.log("[v0] Failed to decode received HMAC as hex:", error)
  }

  // Test with different body encodings
  const bodyAsString = rawBody.toString()
  const bodyAsUtf8 = rawBody.toString("utf8")

  console.log("[v0] Body as string === Body as UTF8:", bodyAsString === bodyAsUtf8)

  // Test all combinations
  const secretFormats = [
    { name: "raw string", secret },
    { name: "base64 decoded", secret: Buffer.from(secret, "base64") },
    { name: "hex decoded", secret: Buffer.from(secret, "hex") },
  ]

  const digestFormats = ['base64', 'hex'] as const

  for (const secretFormat of secretFormats) {
    try {
      for (const digestFormat of digestFormats) {
        const hmac = crypto.createHmac("sha256", secretFormat.secret).update(rawBody).digest(digestFormat)
        console.log(`[v0] HMAC with ${secretFormat.name} (${digestFormat}):`, hmac)
        console.log(`[v0] Match with ${secretFormat.name} (${digestFormat}):`, hmac === cleanHmac)
      }
    } catch (error) {
      console.log(`[v0] Failed to calculate HMAC with ${secretFormat.name}:`, error)
    }
  }

  console.log("[v0] === END DEBUG ===")
}