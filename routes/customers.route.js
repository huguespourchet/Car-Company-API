const express = require("express");
const customersController = require("../controllers/customers.controller");
let router = express.Router();

router.get("/",customersController.index);
router.get("/add",customersController.add);
router.get("/list",customersController.getall);

router.post("/count",customersController.nbcustomers);
router.put("/list/employeeID/:id",customersController.getallcustomersfromemployee);
router.post("/register",customersController.register);
router.get("/edit/:id",customersController.edit);
router.put("/edit/:id/update",customersController.update);
router.delete("/edit/:id/delete",customersController.delete);

module.exports = router;