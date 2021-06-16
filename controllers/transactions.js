const transactions = require("express").Router();
const transaction = require("../models/transaction.js");
const transactionsArray = require("../models/transaction.js");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  const transaction = transactionsArray[arrayIdx];
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

transactions.post("/", (req, res) => {
    const { body } = req
    transactionsArray.push(body)
    const newIdx = transactionsArray.length - 1
    res.json(transactionsArray[newIdx])
})



module.exports = transactions;
