const officesService = require("../services/offices.service");
const customersService = require("../services/customers.service");

exports.getall = (req,res,next) => {
    officesService.getAll((error,results) => {
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

exports.nboffices = (req,res,next) => {
    officesService.getNumberOffices((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad Request"});
        }
        return res.status(200).send({success: 1, data: results});
    });
};
exports.getemployeefromeofficeid = (req,res,next) => {
    officesService.getEmployeeFromOffice(req.params.id, (error,results) => {
        if(error){
            console.log(error);
            return res.status(400).send({ success:0, data:"Bad Request" });
        }
        return res.status(200).send({ success:1, data:results });
    });
};


exports.add = (req,res,next) => {
    const data = {
        officeCode:req.body.officeCode,
        city:req.body.city,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode,
        territory: req.body.territory,
        };
    console.log(data);
    officesService.add(data,(error,results)=>{
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
        city:req.body.city,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode,
        territory: req.body.territory,
    };
    console.log(data);
    console.log(req.params.id);
    officesService.edit(req.params.id,data,(error,results)=>{
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
    customersService.delete(req.params.id,(error,results)=>{
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