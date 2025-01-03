import bcrypt from "bcrypt"

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

const isValidPassword = (password, user) => bcrypt.compare(password, user.password)

export { createHash, isValidPassword }