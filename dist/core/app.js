"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// core/app.ts
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const ApiError_1 = require("../entities/ApiError");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof ApiError_1.ApiError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
exports.default = app;
//# sourceMappingURL=app.js.map