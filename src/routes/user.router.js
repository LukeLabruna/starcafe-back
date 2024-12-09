import express from "express"
import UserController from "../controller/userController.js"
const userController = new UserController

const router = express.Router()

router.post("/register", userController.register)
router.post("/login", userController.login)

export default router