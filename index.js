import express from "express";
import { connectToDatabase } from "./connection.js";
import mongoose from "mongoose";

const app = express();
const port = 3000;

// connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
