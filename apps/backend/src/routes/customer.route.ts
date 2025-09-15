import { type IRouter, Router } from "express"
import { createCustomerWebhook } from "../controllers/customer.controller"

const customerRouter: IRouter = Router()

customerRouter.post("/webhooks/customers/create", createCustomerWebhook)

export default customerRouter
export { customerRouter }
