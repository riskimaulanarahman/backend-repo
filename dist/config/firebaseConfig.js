"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// Use path to build the path to your service account key
const serviceAccountPath = path_1.default.join(__dirname, '../credentials/serviceAccountKey.json');
// Read and parse the service account key
const serviceAccount = JSON.parse(fs_1.default.readFileSync(serviceAccountPath, 'utf8'));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: "https://ebuddy-1f743-default-rtdb.firebaseio.com"
});
const db = firebase_admin_1.default.firestore();
exports.default = db;
//# sourceMappingURL=firebaseConfig.js.map