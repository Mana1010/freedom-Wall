import express from "express";
import router from "./route/route";
import connectDb from "./db/db";
import cors from "cors";
import User from "./model/userSchema.js";
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { name, rants } = req.body;
  try {
    const getId = await User.create({ name, rants });
    res.status(201).json({
      message: "Successfully adding your name into the database",
      userId: getId._id,
    });
  } catch (err) {
    res.status(500).json({ message: "Please try again" });
  }
});
app.use("/rants", router);

connectDb();
app.listen(PORT, () => {
  console.log("Server is listening");
});
