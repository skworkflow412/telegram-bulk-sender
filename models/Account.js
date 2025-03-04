const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  phoneNumber: String,
  apiId: String,
  apiHash: String,
  sessionString: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Account", AccountSchema);
