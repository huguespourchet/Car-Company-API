const productsController =  require("../controllers/products.controller");
const express = require("express");
let router = express.Router();

router.get("/list",productsController.getalllines);
/**
 * @swagger
 * /products/list:
 *   get:
 *      description: Used to get all products's lines
 *      tags:
 *          - products
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/add",productsController.add);
/**
 * @swagger
 * /products/add:
 *   post:
 *      description: Used to add a new product
 *      tags:
 *          - products
 *      parameters:
 *          - in: body
 *            name: product
 *            description: product data
 *            schema:
 *              type: object
 *              required:
 *                 - productCode
 *                 - productName
 *                 - productLine
 *                 - productScale
 *                 - productVendor
 *                 - productDescription
 *                 - quantityInStock
 *                 - buyPrice
 *                 - MSRP
 *              properties:
 *                  productCode:
 *                      type: string
 *                      example: S30_3816
 *                  productName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 2002 Yamaha YZR M2
 *                  productLine:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Vintage Cars
 *                  productScale:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 1:700
 *                  productVendor:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Motor City Art Classics
 *                  productDescription:
 *                      type: text
 *                      example: description
 *                  quantityInStock:
 *                      type: integer
 *                      example: 5
 *                  buyPrice:
 *                      type: decimal
 *                      example: 1000.00
 *                  MSRP:
 *                      type: decimal
 *                      example: 1000.00
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/edit/:id",productsController.edit);
/**
 * @swagger
 * /products/edit/{id}:
 *   put:
 *      description: Used to edit a product
 *      tags:
 *          - products
 *      parameters:
 *          - in: path
 *            name: product code
 *            type: string
 *            description: product code
 *            required: true
 *          - in: body
 *            name: product
 *            description: product data
 *            schema:
 *              type: object
 *              required:
 *                 - productName
 *                 - productLine
 *                 - productScale
 *                 - productVendor
 *                 - productDescription
 *                 - quantityInStock
 *                 - buyPrice
 *                 - MSRP
 *              properties:
 *                  productName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: test
 *                  productLine:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Vintage Cars
 *                  productScale:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 1:700
 *                  productVendor:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Motor City Art Classics
 *                  productDescription:
 *                      type: text
 *                      example: description
 *                  quantityInStock:
 *                      type: integer
 *                      example: 5
 *                  buyPrice:
 *                      type: decimal
 *                      example: 1000.00
 *                  MSRP:
 *                      type: decimal
 *                      example: 1000.00
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/edit/:id/delete",productsController.delete);
/**
 * @swagger
 * /products/edit/{id}/delete:
 *   delete:
 *      description: Used to delete a product
 *      tags:
 *          - products
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            description: Product code
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