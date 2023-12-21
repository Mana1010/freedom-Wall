import express from "express";
import router from "./route/route";
import dbConnection from "./db/db";
import cors from "cors";
const app = express();
const PORT = 5000;
let USER_ID = "";
app.use(express.json());
app.use(cors());
let db: any;
dbConnection.connectToDb((cb: any) => {
  if (!cb) {
    app.listen(PORT, () => {
      console.log("Server is listening");
    });
    db = dbConnection.getDb();
  }
});

app.post("/", async (req, res) => {
  const { name, rants } = req.body;
  try {
    const getId = await db.collection("rants").insertOne({ name, rants });
    res.status(201).json({
      message: "Successfully adding your name into the database",
      userId: getId.insertedId,
    });
  } catch (err) {
    res.status(500).json({ message: "Please try again" });
  }
});
app.use("/rants", router);
export { db, USER_ID };
