const express = require("express");
const employeesController = require("../controllers/employees.controller");
let router = express.Router();

router.get("/",employeesController.index);
router.get("/list",employeesController.getall);
router.post("/list/mostCustomers",employeesController.get2employeeswithmostcust);
router.get("/edit/:id",employeesController.edit);
router.put("/reportedBy/:id",employeesController.getReportsTo);
module.exports = router;