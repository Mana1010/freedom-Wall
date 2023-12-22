"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const rantsSchema = new mongoose_1.default.Schema({
    title: String,
    paragraph: String,
    createdAt: Date,
    updatedAt: Date,
});
const userSchema = new mongoose_1.default.Schema({
    name: String,
    rants: [rantsSchema],
});
exports.default = mongoose_1.default.model("User", userSchema);
