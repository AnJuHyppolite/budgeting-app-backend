const transactions = require("express").Router();
// const transaction = require("../models/transaction.js");
const transactionsArray = require("../models/transaction.js");

//GET - read action - /transactions - get a list of all transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//GET - read action - /transactions/:id - get an individual view (SHOW one transaction)
transactions.get("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  const transaction = transactionsArray[arrayIdx];
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

//POST - create action - /transactions - post has a body
transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newIdx = transactionsArray.length - 1;
  res.json(transactionsArray[newIdx]);
});

//DELETE - destroy action - /transactions/:id
transactions.delete("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  const transaction = transactionsArray[arrayIdx];
  const deletedTransaction = transactionsArray.splice(arrayIdx, 1);
  if (transaction) {
    res.json(deletedTransaction[0]);
  } else {
    res.redirect("/404");
  }
});

//PUT - update action - /transactions/:id - put has a body
transactions.put("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  const { body } = req;
  const transaction = transactionsArray[arrayIdx];
  if (transaction) {
    transactionsArray[arrayIdx] = body;
    res.json(body);
  } else {
    res.redirect("/404");
  }
});

module.exports = transactions;
