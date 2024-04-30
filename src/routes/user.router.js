const express = require("express")
const passport = require("passport")
const UserModel = require("../model/user.model.js")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { createHash, isValidPassword } = require("../utils/hashPassword.js")


router.post("/register", async (req, res) => {
  const { user, password } = req.body;

  try {

    const userExist = await UserModel.findOne({ user })

    if (userExist) {
      return res.status(400).send("El usuario ya existe")
    }

    const newUser = new UserModel({
      user,
      password: createHash(password)
    })

    await newUser.save();

    const token = jwt.sign({ user, role: newUser.role }, process.env.SECRET_KEY_TOKEN, { expiresIn: "24h" });

    res.cookie("starcafeCookieToken", token, {
      maxAge: 24 * 3600 * 1000, 
      httpOnly: true
    })

    res.redirect("/");

  } catch (error) {
    res.status(500).send(`${error}`);
  }
})


router.post("/login", async (req, res) => {
  const { user, password } = req.body;

  try {
  
    const userExist = await UserModel.findOne({ user });

    if (!userExist) {
      return res.status(401).send("Usuario no valido");
    }

    if (!isValidPassword(password, userExist)) {
      return res.status(401).send("Contraseña incorrecta");
    }

    const token = jwt.sign({ user: userExist.user, role: userExist.role }, process.env.SECRET_KEY_TOKEN, { expiresIn: "24h" });

    res.cookie("starcafeCookieToken", token, {
      maxAge: 24 * 3600 * 1000,
      httpOnly: true,
      secure: true
    })

    res.status(200).send({mesagge: "Login"});

  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
})

router.get("/", passport.authenticate("jwt", {session:false}), (req, res) => {
  res.send(req.user);
})

router.post("/logout", (req, res) => {
  res.clearCookie("starcafeCookieToken")
  res.status(200).send("Sesion cerrada con exito")
})


module.exports = router