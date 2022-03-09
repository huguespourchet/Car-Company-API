const express = require("express");
const paymentsController = require("../controllers/payments.controller");
let router = express.Router();

router.put("/year/:year",paymentsController.getMounth);
router.put("/date/:date",paymentsController.getAllByDate);
router.put("/amount/year/:annee1/:annee2",paymentsController.getAllBetweenYears);
router.put("/amount/months/:mois1/:mois2/:annee",paymentsController.getAllBetweenMonths);
module.exports = router;