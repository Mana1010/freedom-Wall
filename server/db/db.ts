import { MongoClient, Db } from "mongodb";

let db: Db;

const dbConnection = {
  connectToDb: async (cb: any) => {
    try {
      const connectDb = await MongoClient.connect(
        "mongodb://localhost:27017/freedomwall"
      );
      db = connectDb.db();
      return cb();
    } catch (err) {
      console.error(err);
      return cb(err);
    }
  },
  getDb: () => db,
};
export default dbConnection;
