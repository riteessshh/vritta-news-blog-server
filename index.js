import express from "express";
import cors from "cors";
import { connectToDatabase } from "./connection.js";
import articleRoute from "./routes/articles.js";
import categoryRoute from "./routes/category.js";

const app = express();
app.use(cors());
const port = 3000;

connectToDatabase();

app.use("/articles", articleRoute);
app.use("/category", categoryRoute);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
