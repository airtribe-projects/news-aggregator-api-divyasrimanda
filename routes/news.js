import express from "express";
import { getNews } from "../controllers/newsController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/news", protect, getNews);

export default router;
