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
                httpOnly: true,
                secure: true,
                sameSite: 'None', 
            })
            res.status(200).json({status: "success", message: "User created and logged in", data: {newUser, token}})
        } catch (error) {
            if (error.message === "User already exist.") return res.status(409).json({status: "error", message: error.message})
            res.status(500).json({status: "error", data: error})    
        }
    }

    async login(req, res) {
        const { userName, password } = req.body
        try {
            const user = await userRepository.userValidPassword(userName, password)
            const token = jwt.sign({ userName, role: user.role }, SECRET_KEY_TOKEN, { expiresIn: "24h" });
            res.cookie("starcafeCookieToken", token, {
                maxAge: 24 * 3600 * 1000,
                httpOnly: true,
                secure: true,
                sameSite: 'None', 
            })
            res.status(200).json({status: "success", message: "User logged in", data: {user, token}})
        } catch (error) {
            if (error.message === "No valid username.") {
                return res.status(404).json({status: "error", message: error.message})
            } else if (error.message === "No valid password.") {
                return res.status(401).json({status: "error", message: error.message})
            } else res.status(500).json({status: "error", data: error})
        }
    }
    async isAuth(req, res) {
        if (!req.user) {
            return res.status(401).json({ status: "error", isAuth: false, user: null });
        }
        res.status(200).json({ status:"success", isAuth: true, user: req.user });
    }
}

export default UserController
