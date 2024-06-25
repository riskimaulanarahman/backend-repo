"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const firebaseConfig_js_1 = require("../config/firebaseConfig.js");
const ApiError_1 = require("../entities/ApiError");
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const data = req.body;
        yield firebaseConfig_js_1.db.collection('USERS').doc(userId).set(data, { merge: true });
        res.status(200).send('User data updated successfully');
    }
    catch (error) {
        const err = error;
        throw new ApiError_1.ApiError(500, err.message);
    }
});
exports.updateUserData = updateUserData;
const fetchUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const userDoc = yield firebaseConfig_js_1.db.collection('USERS').doc(userId).get();
        if (!userDoc.exists) {
            throw new ApiError_1.ApiError(404, 'User not found');
        }
        else {
            res.status(200).json(userDoc.data());
        }
    }
    catch (error) {
        const err = error;
        throw new ApiError_1.ApiError(500, err.message);
    }
});
exports.fetchUserData = fetchUserData;
//# sourceMappingURL=api.js.map