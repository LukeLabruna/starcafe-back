const roleMiddleware = (allowedRoles) => (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ status: "error", message: "Unauthorized: Please log in." })
    }
    if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ status: "error", message: "Forbidden: You don't have permission to perform this action." })
    }
    next()
}

export default roleMiddleware;
