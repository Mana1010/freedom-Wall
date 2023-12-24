import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  rants: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("User", userSchema);
