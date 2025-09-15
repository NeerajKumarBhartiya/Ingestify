import express, {Express} from "express"
import dotenv from "dotenv"
import { createCustomerWebhook } from "./controllers/customer.controller"

dotenv.config()

const app:Express = express()
const PORT = process.env.PORT || 4000

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

app.post("/api/webhooks/customers/create", 
  express.raw({ type: "application/json" }),
  async (req, res) => {
    console.log("WEBHOOK HIT!")
    try {
      await createCustomerWebhook(req, res)
    } catch (error) {
      console.error("Webhook error:", error)
      res.status(500).json({ error: "Internal server error" })
    }
  }
)

app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`)
  res.status(404).json({ error: "Route not found", path: req.originalUrl })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app