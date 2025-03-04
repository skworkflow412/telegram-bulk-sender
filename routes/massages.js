const express = require("express");
const router = express.Router();
const MessageLog = require("../models/MessageLog");
const Account = require("../models/Account");
const User = require("../models/User");

// Send a message
router.post("/", async (req, res) => {
  try {
    const { accountId, userId, message } = req.body;

    // Validate required fields
    if (!accountId || !userId || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Fetch the account and user
    const account = await Account.findById(accountId);
    const user = await User.findById(userId);

    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Simulate message sending (Replace this with Telegram API integration)
    console.log(`📩 Message sent from ${account.phoneNumber} to ${user.username}: ${message}`);

    // Log message
    const log = new MessageLog({ accountId, userId, message, status: "sent" });
    await log.save();

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
