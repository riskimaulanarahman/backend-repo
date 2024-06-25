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
exports.updateUserById = exports.getUserById = void 0;
const firebaseConfig_js_1 = require("../config/firebaseConfig.js");
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield firebaseConfig_js_1.db.collection('USERS').doc(userId).get();
});
exports.getUserById = getUserById;
const updateUserById = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield firebaseConfig_js_1.db.collection('USERS').doc(userId).set(data, { merge: true });
});
exports.updateUserById = updateUserById;
//# sourceMappingURL=userCollection.js.map