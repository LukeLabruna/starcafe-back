import { Schema, model } from "mongoose"

const schema = new Schema({
	userName: String,
	password: String,
	role: {
		type: String,
		enum: ["admin", "user"],
		default: "user"
	}
})

const UserModel = model("users", schema)

export default UserModel