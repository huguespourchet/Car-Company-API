const express = require("express");
const paymentsController = require("../controllers/payments.controller");
let router = express.Router();

router.put("/year/:year",paymentsController.getMounth);
/**
 * @swagger
 * /payments/year/{year}:
 *   put:
 *      description: Used to show the biggest mounth in a year
 *      tags:
 *          - payments
 *      parameters:
 *          - in: path
 *            name: year
 *            type: integer
 *            description: year
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/date/:date",paymentsController.getAllByDate);
/**
 * @swagger
 * /payments/date/{date}:
 *   put:
 *      description: Used to get alm amounts from a date
 *      tags:
 *          - payments
 *      parameters:
 *          - in: path
 *            name: date
 *            type: string
 *            description: date
 *            example: 2003-12-15
 *            format: date
 *            minLength: 0
 *            maxLength: 10
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/amount/year/:annee1/:annee2",paymentsController.getAllBetweenYears);
/**
 * @swagger
 * /payments/amount/year/{annee1}/{annee2}:
 *   put:
 *      description: Used to get all amounts between 2 years
 *      tags:
 *          - payments
 *      parameters:
 *          - in: path
 *            name: annee1
 *            type: integer
 *          - in: path
 *            name: annee2
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/amount/months/:mois1/:mois2/:annee",paymentsController.getAllBetweenMonths);
/**
 * @swagger
 * /payments/amount/months/{mois1}/{mois2}/{annee}:
 *   put:
 *      description: Used to get all amounts between 2 months
 *      tags:
 *          - payments
 *      parameters:
 *          - in: path
 *            name: mois1
 *            type: integer
 *          - in: path
 *            name: mois2
 *            type: integer
 *          - in: path
 *            name: annee
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;