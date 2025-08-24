const express = require("express");
const router = express.Router();
const {
  Gettransaction,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

router.get("/", Gettransaction);
router.post("/", addTransaction);
router.delete("/:id", deleteTransaction);
module.exports = router;
