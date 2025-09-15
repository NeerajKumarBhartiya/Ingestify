import express, { type Express } from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import customerRouter from "./routes/customer.route"

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(
  "/webhooks",
  bodyParser.raw({
    type: "application/json",
    limit: "10mb",
  }),
)

app.use((req, res, next) => {
  if (req.path.startsWith("/webhooks")) {
    // Skip JSON parsing for webhook routes
    next()
  } else {
    // Apply JSON parsing for all other routes
    express.json()(req, res, next)
  }
})

app.use("/", customerRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`SHOPIFY_WEBHOOK_SECRET: ${process.env.SHOPIFY_WEBHOOK_SECRET}`)
})

export default app
