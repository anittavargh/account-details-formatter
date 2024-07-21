var express = require("express");
var router = express.Router();
const userAccountsService = require("../services/processUserAccounts");

/* GET home page. */
router.post("", async function (req, res, next) {
  try {
    let accountDetails = req.body.results;
    const response = await userAccountsService.processUserAccounts(
      accountDetails
    );

    res.status(200).json({ status: 200, result: response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
