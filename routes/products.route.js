const productsController =  require("../controllers/products.controller");
const express = require("express");
let router = express.Router();

router.get("/list",productsController.getalllines);
router.post("/add",productsController.add);
router.put("/edit/:id",productsController.edit);
router.delete("/edit/:id/delete",productsController.delete);


module.exports = router;