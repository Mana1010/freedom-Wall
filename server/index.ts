import express from "express";
import router from "./route/route";
import dbConnection from "./db/db";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
let db: any;

dbConnection.connectToDb((cb: any) => {
  if (!cb) {
    app.listen(5000, () => {
      console.log("Server is listening");
    });
    db = dbConnection.getDb();
  }
});

app.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    await db.collection("rants").insertOne({ name });
    res.status(201).json({ message: "Successfully fill up the form" });
  } catch (err) {
    res.status(500).json({ message: "Please try again" });
  }
});
app.use("/rants", router);
