const express = require("express");
const router = express.Router();
const MessageLog = require("../models/MessageLog");
const Account = require("../models/Account");
const User = require("../models/User");

// Send a message
router.post("/", async (req, res) => {
  const { accountId, userId, message } = req.body;

  const account = await Account.findById(accountId);
  const user = await User.findById(userId);

  if (!account || !user) {
    return res.status(400).json({ error: "Invalid account or user" });
  }

  // Simulating sending a message
  console.log(`Message sent from ${account.phoneNumber} to ${user.username}: ${message}`);

  const log = new MessageLog({ accountId, userId, message, status: "sent" });
  await log.save();

  res.json({ message: "Message sent successfully!" });
});

module.exports = router;
