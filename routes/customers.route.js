const express = require("express");
const customersController = require("../controllers/customers.controller");
let router = express.Router();

router.get("/",customersController.index);
router.get("/add",customersController.add);
router.get("/list",customersController.getall);
/**
 * @swagger
 * /customers/list:
 *   get:
 *      description: Used to get all customers
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/count",customersController.nbcustomers);
/**
 * @swagger
 * /customers/count:
 *   post:
 *      description: Used to count the number of customers
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/list/employeeID/:id",customersController.getallcustomersfromemployee);
/**
 * @swagger
 * /customers/list/employeeID/{id}:
 *   put:
 *      description: Used to list all customers asigned to an employee
 *      tags:
 *          - customers
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
router.post("/register",customersController.register);
/**
 * @swagger
 * /customers/register:
 *   post:
 *      description: Used to register a new customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - customerNumber
 *                 - customerName
 *                 - contactLastName
 *                 - contactFirstName
 *                 - phone
 *                 - addressLine1
 *                 - city
 *                 - country
 *              properties:
 *                  customerNumber:
 *                      type: integer
 *                      example: 122
 *                  customerName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Baane Mini Imports
 *                  contactLastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Bergulfsen
 *                  contactFirstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Jonas
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 07-98 9555
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Erling Skakkes gate 78
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Stavern
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Norway
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/edit/:id",customersController.edit);
/**
 * @swagger
 * /customers/edit/{id}:
 *   get:
 *      description: Used to get a customer with his id
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: customer's id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/edit/:id/update",customersController.update);
/**
 * @swagger
 * /customers/edit/{id}/update:
 *   put:
 *      description: Used to update a customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: Customer's ID
 *            required: true
 *          - in: body
 *            name: Customer
 *            description: Customer data
 *            schema:
 *              type: object
 *              required:
 *                 - customerName
 *                 - contactLastName
 *                 - contactFirstName
 *                 - phone
 *                 - addressLine1
 *                 - city
 *                 - country
 *              properties:
 *                  customerName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: test
 *                  contactLastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: test
 *                  contactFirstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: test
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: test
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Erling Skakkes gate 78
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Stavern
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Norway
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/edit/:id/delete",customersController.delete);
/**
 * @swagger
 * /customers/edit/{id}/delete:
 *   delete:
 *      description: Used to delete a customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: Customer's ID
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