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

