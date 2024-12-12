import passport from "passport"

const authMiddleware = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
        if (err) return next(err)
        req.user = user
        next()
    })(req, res, next)
}

export default authMiddleware
