import mongoose from "mongoose";
import "dotenv/config";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDb;
