const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const POST = mongoose.model("POST");
const User = mongoose.model("User");

router.get("/user/:id", (req, res) => {
  console.log("User ID:", req.params.id); // Debugging
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      POST.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .then((posts) => {
          res.json({ user, posts });
        })
        .catch((err) => {
          return res.status(422).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(422).json({ error: "Invalid User ID" });
    });
});

module.exports = router;
