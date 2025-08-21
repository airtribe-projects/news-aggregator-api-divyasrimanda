import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import preferencesRoutes from "./routes/preferencesRoutes.js";
import newsRoutes from "./routes/news.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Auth API is ruuning up"));
app.use("/users", authRoutes);
app.use("/users", preferencesRoutes);
app.use("/api", newsRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Mongo connection error:", err.message);
    process.exit(1);
  }
})();

export default app;
