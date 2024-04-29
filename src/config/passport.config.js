const passport = require("passport")
const jwt = require("passport-jwt")
require("dotenv").config()

const JWTStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const initializePassport = () => {
	passport.use("jwt", new JWTStrategy({
		jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
		secretOrKey: process.env.SECRET_KEY_TOKEN,
	}, async (jwt_payload, done) => {
		try {
			return done(null, jwt_payload);
		} catch (error) {
			return done(error)
		}
	}))
}


const cookieExtractor = (req) => {
	let token = null;
	if (req && req.cookies) {
		token = req.cookies["starcafeCookieToken"]
	}
	return token;
}


module.exports = initializePassport