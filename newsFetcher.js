import axios from "axios";
import { config } from "dotenv";
import { connectToDatabase } from "./connection.js";
import { categoryNews } from "./models/categoryNew.js";

config();
connectToDatabase();

const url = "https://newsapi.org/v2/top-headlines";
const token = process.env.NEWSAPI_KEY;

const headers = {
  Authorization: `Bearer ${token}`,
};

const params = {
  category: "health",
  country: "in",
};

axios
  .get(url, { params, headers })
  .then((response) => {
    const apiData = response.data;

    if (apiData.status !== "ok") {
      throw new Error("Failed to fetch data");
    }

    const articles = apiData.articles;
    console.log(`Fetched ${articles.length} articles`);

    for (let item of articles) {
      item.category = params.category;

      const document = new categoryNews(item);

      document
        .save()
        .then(() => console.log("Data saved successfully!"))
        .catch((error) => console.error("Error saving data:", error));
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
console.log("Data transfer Ends!");
