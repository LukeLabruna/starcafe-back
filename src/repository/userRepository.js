import UserModel from "../model/user.model.js";
import { createHash, isValidPassword } from "../utils/hashPassword.js";

class UserRepository {

    async createUser(user) {
        const { userName, password } = user
        try {
            const userExist = await UserModel.findOne({ userName })
            if (userExist) throw new Error("User already exist.")
            const newUser = new UserModel({
                userName,
                password: createHash(password)
            })
            await newUser.save()
            return newUser
        } catch (error) {
            throw error
        }
    }

    async userValidPassword(userName, password) {
        try {
            const userExist = await UserModel.findOne({ userName })
            if (!userExist) throw new Error("No valid username.")
            if (!isValidPassword(password, userExist)) throw new Error("No valid password.")
            return userExist
          } catch (error) {
            throw error
          }
    }

    
}