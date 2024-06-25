"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const ApiError_1 = require("../entities/ApiError");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || !validateToken(token)) {
        return next(new ApiError_1.ApiError(401, 'Unauthorized'));
    }
    next();
};
exports.authMiddleware = authMiddleware;
function validateToken(token) {
    // Add your token validation logic here
    // Example: return true if valid, false otherwise
    return true; // For demonstration, always returns true
}
//# sourceMappingURL=authMiddleware.js.map