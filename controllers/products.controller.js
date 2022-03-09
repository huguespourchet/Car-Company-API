const productsService = require("../services/products.service");

exports.getalllines = (req,res) => {
    productsService.getAllLines((error,results)=> {
        if(error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};
exports.add = (req,res,next) => {
    const data = {
        productCode:req.body.productCode,
        productName:req.body.productName,
        productLine: req.body.productLine,
        productScale: req.body.productScale,
        productVendor: req.body.productScale,
        productDescription: req.body.productDescription,
        quantityInStock: req.body.quantityInStock,
        buyPrice: req.body.buyPrice,
        MSRP: req.body.MSRP
    };
    console.log(data);
    productsService.add(data,(error,results)=>{
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
exports.edit = (req,res)=>{
    const data = {
        productName:req.body.productName,
        productLine: req.body.productLine,
        productScale: req.body.productScale,
        productVendor: req.body.productScale,
        productDescription: req.body.productDescription,
        quantityInStock: req.body.quantityInStock,
        buyPrice: req.body.buyPrice,
        MSRP: req.body.MSRP
    };
    console.log(data);
    console.log(req.params.id);
    productsService.edit(req.params.id,data,(error,results)=>{
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

exports.delete = (req,res) => {
    console.log(req.params.id);
    productsService.delete(req.params.id,(error,results)=>{
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