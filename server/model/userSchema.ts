import mongoose from "mongoose";

const rantsSchema = new mongoose.Schema({
  title: String,
  paragraph: String,
  createdAt: Date,
  updatedAt: Date,
});
const userSchema = new mongoose.Schema({
  name: String,
  rants: [rantsSchema],
});

export default mongoose.model("User", userSchema);
