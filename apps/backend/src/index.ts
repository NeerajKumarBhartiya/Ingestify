import express, { Express } from "express"
import dotenv from "dotenv"
import corsMiddleware from "cors";
import { createCustomerWebhook, getAllCustomers } from "./controllers/customer.controller"
import { createOrderWebhook, getAllOrders } from "./controllers/order.controller"
import { createProductWebhook, getAllProducts } from "./controllers/product.controller"


dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 4000

app.use(corsMiddleware())

app.use((req, res, next) => {
  console.log(new Date().toISOString(), "-", req.method, req.originalUrl, "Content-Type:", req.headers["content-type"])
  next()
})

app.post(
  "/api/webhooks/customers/create",
  express.raw({ type: "*/*" }),
  createCustomerWebhook
)

app.post(
  "/api/webhooks/orders/create",
  express.raw({ type: "*/*" }),
  createOrderWebhook
)

app.post(
  "/api/webhooks/products/create",
  express.raw({ type: "*/*" }),
  createProductWebhook
)

app.get("/products", getAllProducts)
app.get("/orders", getAllOrders)
app.get("/customers", getAllCustomers)
app.use((req, res) => {
  console.log("404 - Route not found:", req.method, req.originalUrl)
  res.status(404).json({ error: "Route not found", path: req.originalUrl })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app

function cors(): any {
  throw new Error("Function not implemented.")
}

