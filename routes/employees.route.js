const express = require("express");
const employeesController = require("../controllers/employees.controller");
let router = express.Router();

router.get("/",employeesController.index);
router.get("/list",employeesController.getall);
/**
 * @swagger
 * /employees/list:
 *   get:
 *      description: Used to get all employees
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/list/mostCustomers",employeesController.get2employeeswithmostcust);
/**
 * @swagger
 * /employees/list/mostCustomers:
 *   post:
 *      description: Used to get the 2 first employees with the most customers asigned
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/edit/:id",employeesController.edit);
/**
 * @swagger
 * /employees/edit/{id}:
 *   get:
 *      description: Used to get an employee with his id
 *      tags:
 *          - employees
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: employee's id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/reportedBy/:id",employeesController.getReportsTo);
/**
 * @swagger
 * /employees/reportedBy/{id}:
 *   put:
 *      description: Used to get all employees that report to an employee
 *      tags:
 *          - employees
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: employee's id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;