import axios from "axios";
import User from "../models/User.js";

export const getNews = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Get user preferences
    const preferences = user.preferences; // e.g., ['movies', 'comics']

    if (!preferences || preferences.length === 0) {
      return res.status(400).json({ message: "No preferences set" });
    }

    // Fetch news for each preference
    const apiKey = process.env.NEWS_API_KEY; // Get from .env file
    const newsPromises = preferences.map(async (topic) => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}&pageSize=5`
      );
      return response.data.articles;
    });

    const newsResults = await Promise.all(newsPromises);
    const allNews = newsResults.flat(); 

    res.status(200).json({ news: allNews });
  } catch (error) {
    console.error(error);
    if (error.response) {
      return res
        .status(error.response.status)
        .json({ message: error.response.data });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};
