const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const connectToDb = require("./db");
const bcrypt = require("bcrypt");
const path = require("path");

connectToDb();

// Middleware
app.use(express.json());
app.use(cors());

// Models
require("./models/model");
require("./models/post");

// Routes
app.use(require("./routes/auth"));
app.use(require("./routes/createpost"));
app.use(require("./routes/user"));

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html")),
    function (err) {
      res.status(500).send(err);
    };
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
