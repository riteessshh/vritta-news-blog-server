import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
let url = process.env.DATABASE_URI;
// let url = "mongodb://localhost:27017/news-data";

export async function connectToDatabase() {
  await mongoose
    .connect(url)
    .then(console.log("database is connected."))
    .catch((err) => {
      console.error(err);
    });
}
