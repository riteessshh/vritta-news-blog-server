import express from "express";
import { handleNumberArticles } from "../controllers/articles.js";

const router = express.Router();

router.get("/:number", handleNumberArticles);

export default router;
