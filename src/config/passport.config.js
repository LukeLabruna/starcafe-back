import passport from "passport";
import passportJwt from "passport-jwt";
import { SECRET_KEY_TOKEN } from "./env.config.js"


const JWTStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const initializePassport = () => {
	passport.use("jwt", new JWTStrategy({
		jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
		secretOrKey: SECRET_KEY_TOKEN,
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


export default initializePassport