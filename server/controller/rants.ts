import { Request, Response } from "express";
import User from "../model/userSchema.js";
const getData = async (req: Request, res: Response) => {
  try {
    const getUser = await User.find();
    res.status(200).json({
      response: getUser,
      message: "Successfully retrieve the data",
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve the data" });
  }
};
export { getData };
