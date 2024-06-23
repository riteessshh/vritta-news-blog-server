import express from "express";
import path from "path";
import cors from "cors";
import { connectToDatabase } from "./connection.js";
import listRoute from "./routes/list.js";
import categoryRoute from "./routes/category.js";
import articleRoute from "./routes/article.js";

const app = express();
app.use(cors());
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToDatabase();

app.use("/list", listRoute);
app.use("/article", articleRoute);
app.use("/category", categoryRoute);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
