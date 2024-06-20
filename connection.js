import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

export async function connectToDatabase() {
  await mongoose
    .connect(process.env.DATABASE_URI)
    .then(console.log("database is connected."))
    .catch((err) => {
      console.error(err);
    });
}
