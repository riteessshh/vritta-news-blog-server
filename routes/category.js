import express from "express";
import { handleCategoryArticles } from "../controllers/articles.js";

const router = express.Router();

router.get("/:category", handleCategoryArticles);

export default router;
