const mongoose = require("mongoose")

const schema = new mongoose.Schema({
	user: String,
	password: String,
	role: {
		type: String,
		enum: ["admin", "user"],
		default: "user"
	}
})

const UserModel = mongoose.model("users", schema)

module.exports = UserModel