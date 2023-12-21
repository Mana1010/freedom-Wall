"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ID = exports.db = void 0;
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route/route"));
const db_1 = __importDefault(require("./db/db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
let USER_ID = "";
exports.USER_ID = USER_ID;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
let db;
db_1.default.connectToDb((cb) => {
    if (!cb) {
        app.listen(PORT, () => {
            console.log("Server is listening");
        });
        exports.db = db = db_1.default.getDb();
    }
});
app.post("/", async (req, res) => {
    const { name, rants } = req.body;
    try {
        const getId = await db.collection("rants").insertOne({ name, rants });
        res.status(201).json({
            message: "Successfully adding your name into the database",
            userId: getId.insertedId,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Please try again" });
    }
});
app.use("/rants", route_1.default);
