"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route/route"));
const db_1 = __importDefault(require("./db/db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
let db;
db_1.default.connectToDb((cb) => {
    if (!cb) {
        app.listen(5000, () => {
            console.log("Server is listening");
        });
        db = db_1.default.getDb();
    }
});
app.post("/", async (req, res) => {
    const { name } = req.body;
    try {
        await db.collection("rants").insertOne({ name });
        res.status(201).json({ message: "Successfully fill up the form" });
    }
    catch (err) {
        res.status(500).json({ message: "Please try again" });
    }
});
app.use("/rants", route_1.default);
