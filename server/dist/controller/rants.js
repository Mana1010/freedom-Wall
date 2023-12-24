"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const userSchema_js_1 = __importDefault(require("../model/userSchema.js"));
const getData = async (req, res) => {
    try {
        const getUser = await userSchema_js_1.default.find();
        res.status(200).json({
            response: getUser,
            message: "Successfully retrieve the data",
        });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to retrieve the data" });
    }
};
exports.getData = getData;
