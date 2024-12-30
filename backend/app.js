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
require("./models/post");

// Routes
app.use(require("./routes/auth"));
app.use(require("./routes/createpost"));
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
