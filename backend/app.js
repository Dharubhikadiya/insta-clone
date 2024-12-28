const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const connectToDb = require("./db");
const bcrypt = require("bcrypt");

connectToDb();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

// Models
require("./models/model");

// Routes
app.use(require("./routes/auth"));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
