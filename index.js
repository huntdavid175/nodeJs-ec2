const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello EC2" });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
