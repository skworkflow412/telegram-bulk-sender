const mongoose = require("mongoose");

const MessageLogSchema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  status: { type: String, enum: ["sent", "failed"], default: "sent" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MessageLog", MessageLogSchema);
