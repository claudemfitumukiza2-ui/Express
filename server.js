
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my Express project!");
});

app.get("/about", (req, res) => {
  res.send("This is my About page.");
});

app.get("/contact", (req, res) => {
  res.send("Contact us here.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
