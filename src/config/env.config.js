import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT
const USER_MONGO = process.env.USER_MONGO
const PASSWORD_MONGO = process.env.PASSWORD_MONGO
const DB_MONGO = process.env.DB_MONGO
const SECRET_KEY_TOKEN = process.env.SECRET_KEY_TOKEN

export {PORT, USER_MONGO, PASSWORD_MONGO, DB_MONGO, SECRET_KEY_TOKEN}