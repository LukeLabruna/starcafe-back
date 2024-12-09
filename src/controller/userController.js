import jwt from "jsonwebtoken"
import {SECRET_KEY_TOKEN} from "../config/env.config.js"
import UserRepository from "../repository/userRepository.js"
const userRepository = new UserRepository

class UserController {

    async register(req, res) {
        const { userName, password } = req.body
        try {
            const newUser = await userRepository.createUser(userName, password)
            const token = jwt.sign({ userName, role: newUser.role }, SECRET_KEY_TOKEN, { expiresIn: "24h" });
            res.cookie("starcafeCookieToken", token, {
                maxAge: 24 * 3600 * 1000,
                httpOnly: true
            })
            res.status(200).json({status: "success", message: "User created and logged in", data: {newUser, token}})
        } catch (error) {
            if (error.message === "User already exist.") return res.status(409).json({status: "error", message: "User already exist."})
            res.status(500).json({status: "error", data: error})    
        }
    }

}

export default UserController