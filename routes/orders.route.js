const orderController = require("../controllers/orders.controller");
const express = require("express");
let router = express.Router();

router.put("/customer/:id/last",orderController.getLastOrderById);
/**
 * @swagger
 * /orders/customer/{id}/last:
 *   put:
 *      description: Used to get the last order's details of a customer
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: order's id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/id/:id",orderController.getallproductsfromorder);
/**
 * @swagger
 * /orders/id/{id}:
 *   get:
 *      description: Used to get all products from an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: order's id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/id/:id/add",orderController.addProductToOrder);
/**
 * @swagger
 * /orders/id/{id}/add:
 *   post:
 *      description: Used to register a product to an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: order's id
 *            required: true
 *          - in: body
 *            name: Product
 *            description: orderDetails data
 *            schema:
 *              type: object
 *              required:
 *                 - productCode
 *                 - quantityOrdered
 *                 - priceEach
 *                 - orderLineNumber
 *              properties:
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 15
 *                      example: S700_2824
 *                  quantityOrdered:
 *                      type: integer
 *                      example: 25
 *                  priceEach:
 *                      type: decimal
 *                      example: 131.49
 *                  orderLineNumber:
 *                      type: integer
 *                      example: 12
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/id/:id/product/:idp/delete",orderController.deleteProductFromOrder);
/**
 * @swagger
 * /orders/id/{id}/product/{idp}/delete:
 *   delete:
 *      description: Used to delete a product from an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: order's ID
 *            required: true
 *          - in: path
 *            name: idp
 *            type: string
 *            minLength: 1
 *            maxLength: 50
 *            description: product's code
 *            example: S700_2824
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/id/:id/product/:idp/updateQtt/:nb",orderController.updateQuantityOrdered);
/**
 * @swagger
 * /orders/id/{id}/product/{idp}/updateQtt/{nb}:
 *   put:
 *      description: Used to update quantity of a product ordered
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: order's ID
 *            required: true
 *          - in: path
 *            name: idp
 *            type: string
 *            minLength: 1
 *            maxLength: 50
 *            description: product's code
 *            example: S700_2824
 *          - in: path
 *            name: nb
 *            type: integer
 *            description: new quantity
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;