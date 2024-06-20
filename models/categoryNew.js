import mongoose from "mongoose";

const categoryNewsSchema = new mongoose.Schema({
  source: Object,
  author: String,
  title: String,
  description: String,
  category: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

export const categoryNews = mongoose.model("categoryNews", categoryNewsSchema);
