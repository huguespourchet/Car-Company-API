const express = require("express");
const officesController = require("../controllers/offices.controller");
const customersController = require("../controllers/customers.controller");
let router = express.Router();

router.get("/list",officesController.getall);
router.post("/count",officesController.nboffices);
router.put("/list/:id/employee",officesController.getemployeefromeofficeid);
router.post("/add",officesController.add);

router.put("/edit/:id",officesController.edit);
router.delete("/:id/delete",officesController.delete);

module.exports = router;