require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb+srv://your-db-uri",
  port: process.env.PORT || 8080, // Koyeb uses port 8080
};
