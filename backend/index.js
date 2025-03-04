const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config/config");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.send("Backend is running 🚀"));

// Import Routes
app.use("/api/accounts", require("./routes/accounts"));
app.use("/api/users", require("./routes/users"));
app.use("/api/messages", require("./routes/messages"));

const PORT = config.port;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
