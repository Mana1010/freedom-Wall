"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route/route"));
const db_1 = __importDefault(require("./db/db"));
const cors_1 = __importDefault(require("cors"));
const userSchema_js_1 = __importDefault(require("./model/userSchema.js"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/", async (req, res) => {
    const { name, rants } = req.body;
    try {
        const getId = await userSchema_js_1.default.create({ name, rants });
        res.status(201).json({
            message: "Successfully adding your rant into the database",
            userId: getId._id,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Please try again" });
    }
});
app.use("/rants", route_1.default);
(0, db_1.default)();
app.listen(PORT, () => {
    console.log("Server is listening");
});
