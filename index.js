// Import necessary modules
import express from "express";
import axios from "axios";
import dotenv from "dotenv"; // Import dotenv

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const apiURL = process.env.API_URL; // Access the API URL from environment variables
    const result = await axios.get(apiURL); // Use apiURL from environment variables
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    res.status(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
