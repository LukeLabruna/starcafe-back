const express = require("express")
require("dotenv").config()
require("./database.js")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const initializePassport = require("./config/passport.config.js")
const productsRouter = require("./routes/products.router.js")
const userRouter = require("./routes/user.router.js")
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors({credentials: true}))
app.use(express.static("./src/public"));

initializePassport(); 

app.use("/api/products", productsRouter)
app.use("/api/user", userRouter)

const httpServer = app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))