const orderService = require("../services/orders.service");

exports.getLastOrderById = (req,res) => {
    console.log(req.params.id);
    orderService.getLastOrderFromCustomer(req.params.id, (error,results)=> {
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};
exports.getallproductsfromorder = (req,res) => {
    console.log(req.params.id);
    orderService.getProductsByOrderId(req.params.id, (error,results)=> {
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};
exports.addProductToOrder = (req,res) => {
    const data = {
        productCode:req.body.productCode,
        quantityOrdered:req.body.quantityOrdered,
        priceEach:req.body.priceEach,
        orderLineNumber:req.body.orderLineNumber
    };
    console.log(data);
    orderService.addProductsToOrderById(req.params.id,data,(error,results) => {
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.deleteProductFromOrder = (req,res) => {
    console.log(req.params.id, "product: ",req.params.idp);
    orderService.deleteProductsFromOrderById(req.params.id,req.params.idp,(error,results) => {
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.updateQuantityOrdered = (req,res) => {
    console.log(req.params.id, "product: ",req.params.idp, "quantity changed: ", req.params.nb);
    orderService.updateQuantityOrdered(req.params.id, req.params.idp, req.params.nb, (error,results) => {
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};