import { type IRouter, Router } from "express"
import { createCustomerWebhook } from "../controllers/customer.controller"

const customerRouter: IRouter = Router()

customerRouter.get("/customers/create", (req, res) => {
  res.json({ message: "Webhook endpoint exists" })
})

customerRouter.post("/customers/create", createCustomerWebhook)

export default customerRouter
export { customerRouter }