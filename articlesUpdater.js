import { connectToDatabase } from "./connection.js";
import { categoryNews } from "./models/categoryNew.js";

connectToDatabase();

// const response = categoryNews.findOneAndDelete({ category: "general" });
// console.log(response);

categoryNews
  .deleteMany({ category: "general" })
  .then((response) => {
    if (response) {
      console.log("News document deleted:", response);
    } else {
      console.log("No news document found for category: general");
    }
  })
  .catch((error) => {
    console.error("Error deleting news document:", error);
  });
