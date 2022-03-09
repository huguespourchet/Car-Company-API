const express = require("express");
const officesController = require("../controllers/offices.controller");
const customersController = require("../controllers/customers.controller");
let router = express.Router();

router.get("/list",officesController.getall);
/**
 * @swagger
 * /offices/list:
 *   get:
 *      description: Used to get all offices
 *      tags:
 *          - offices
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/count",officesController.nboffices);
/**
 * @swagger
 * /offices/count:
 *   post:
 *      description: Used to count the number of offices
 *      tags:
 *          - offices
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/list/:id/employee",officesController.getemployeefromeofficeid);
/**
 * @swagger
 * /offices/list/{id}/employee:
 *  put:
 *      description: Used to get employees that works on an office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: office's id
 *            required: true;
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/add",officesController.add);
/**
 * @swagger
 * /offices/add:
 *   post:
 *      description: Used to add a new office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: body
 *            name: office
 *            description: office data
 *            schema:
 *              type: object
 *              required:
 *                 - officeCode
 *                 - city
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - state
 *                 - country
 *                 - postalCode
 *                 - territory
 *              properties:
 *                  officeCode:
 *                      type: integer
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Belfort
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: +33 14 723 4404
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 1550 Court Place
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Suite 300
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: NULL
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: France
 *                  postalCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 25000
 *                  territory:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: EMEA
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/edit/:id",officesController.edit);
/**
 * @swagger
 * /offices/edit/{id}:
 *   put:
 *      description: Used to edit an office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: office code
 *            required: true
 *          - in: body
 *            name: office
 *            description: office data
 *            schema:
 *              type: object
 *              required:
 *                 - city
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - state
 *                 - country
 *                 - postalCode
 *                 - territory
 *              properties:
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: chnagedCity
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: +33 14 723 4404
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: changeAddress
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Suite 300
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: NULL
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: France
 *                  postalCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 25000
 *                  territory:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: EMEA
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/:id/delete",officesController.delete);
/**
 * @swagger
 * /offices/{id}/delete:
 *   delete:
 *      description: Used to delete an office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            description: officeCode
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