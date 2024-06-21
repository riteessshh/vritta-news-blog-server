import { categoryNews } from "../models/categoryNew.js";

export async function handleNumberArticles(req, res) {
  const number = req.params.number;
  //   console.log(typeof number);
  try {
    const randomItems = await categoryNews.aggregate([
      { $limit: Number(number) },
    ]);
    console.log(`${number} articles has been served.`);
    return res.send(randomItems);
  } catch (error) {
    console.error("Error fetching random items:", error);
  }
}

export async function handleCategoryArticles(req, res) {
  const category = req.params.category;
  try {
    // Find documents where the 'category' field matches the provided category
    const items = await categoryNews.find({ category });

    console.log(`${category} articles has been served.`);
    return res.send(items);
  } catch (error) {
    console.error("Error fetching items by category:", error);
  }
}

export async function handleUniqueArticle(req, res) {
  const artId = req.params.id;
  try {
    const result = await categoryNews.findById(artId);
    console.log("Article has been found.");
    return res.send(result);
  } catch (error) {
    console.error(`There is an error: ${error}`);
  }
}
