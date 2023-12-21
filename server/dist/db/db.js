"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let db;
const dbConnection = {
    connectToDb: async (cb) => {
        try {
            const connectDb = await mongodb_1.MongoClient.connect("mongodb://localhost:27017/freedomwall");
            db = connectDb.db();
            return cb();
        }
        catch (err) {
            console.error(err);
            return cb(err);
        }
    },
    getDb: () => db,
};
exports.default = dbConnection;
