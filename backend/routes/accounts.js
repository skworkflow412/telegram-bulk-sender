const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

// Get all accounts
router.get("/", async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

// Add a new account
router.post("/", async (req, res) => {
  const newAccount = new Account(req.body);
  await newAccount.save();
  res.json({ message: "Account added!" });
});

module.exports = router;
