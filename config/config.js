require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb+srv://wednesday:wednesday@wednesday.pl7um.mongodb.net/?retryWrites=true&w=majority&appName=wednesday",
  port: process.env.PORT || 8080, // Koyeb uses port 8080
};
