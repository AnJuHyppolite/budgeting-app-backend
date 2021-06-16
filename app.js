const express = require("express");
const cors = require('cors');

const app = express();

const transactionsController = require("./controllers/transactions.js");
const transaction = require("./models/transaction.js");

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController)

// ROOT
app.get("/", (req, res) => {
  res.send("AnJu's Budget App - Backend");
});

app.get("*", (req, res) => {
  res.status("404").send("Oopsie! Page Not Found!")
})


module.exports = app;
