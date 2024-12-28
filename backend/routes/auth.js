const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({ error: "Please add all required fields" });
  }

  try {
    const existingUser = await User.findOne({
      email: email,
      username: username,
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists with the email or username" });
    }
    bcrypt.hash(password, 12).then((hashedPassword) => {
      const user = new User({
        name,
        username,
        email,
        password: hashedPassword,
      });
      user.save();
      res.status(201).json({ message: "Saved Successfully" });
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to save user" });
  }
});

module.exports = router;
