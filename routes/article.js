import express from "express";
import { handleUniqueArticle } from "../controllers/articles.js";

const router = express.Router();

router.get("/:id", handleUniqueArticle);

export default router;
