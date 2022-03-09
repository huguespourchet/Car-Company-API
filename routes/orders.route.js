const orderController = require("../controllers/orders.controller");
const express = require("express");
let router = express.Router();

router.put("/customer/:id/last",orderController.getLastOrderById);
router.get("/id/:id",orderController.getallproductsfromorder);
router.post("/id/:id/add",orderController.addProductToOrder);
router.delete("/id/:id/product/:idp/delete",orderController.deleteProductFromOrder);
router.put("/id/:id/product/:idp/updateQtt/:nb",orderController.updateQuantityOrdered);
module.exports = router;