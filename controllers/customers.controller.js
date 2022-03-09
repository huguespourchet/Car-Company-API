const customersService = require("../services/customers.service");

exports.index = (req,res) => {
    customersService.getAll((error,results)=>{
        if(error){
            console.log(error);
            res.render('customers/index', { customers: null });
        }
        res.render('customers/index', { customers: results });
    });
};

exports.getall = (req,res,next) => {
    customersService.getAll((error,results) => {
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

exports.nbcustomers = (req,res,next) => {
    customersService.getNumberCustomers((error,results) => {
        if(error){
            console.log(error);
            return res.status(400).send({ success:0, data:"Bad Request" });
        }
        return res.status(200).send({ success:1, data:results });
    });
};

exports.getallcustomersfromemployee = (req,res,next) => {
    customersService.getAllCustomersFromEmployee(req.params.id, (error,results)=> {
        if(error){
            console.log(error);
            return res.status(400).send({ success:0, data:"Bad Request" });
        }
        return res.status(200).send({ success:1, data:results });
    });
};
exports.add = (req,res) => {
    res.render('customers/add');
};
    exports.register = (req,res,next) => {
        const data = {
            customerNumber:req.body.customerNumber,
            customerName:req.body.customerName,
            contactLastName: req.body.contactLastName,
            contactFirstName: req.body.contactFirstName,
            phone: req.body.phone,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.city,
            state: req.body.state,
            postalCode: req.body.postalCode,
            country: req.body.country,
            salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
            creditLimit: req.body.creditLimit
        };
        console.log(data);
        customersService.register(data,(error,results)=>{
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
    exports.edit = (req,res,next)=>{
        customersService.getCustomerById(req.params.id,(error,results)=>{
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

    exports.update = (req,res)=>{
        const data = {
            customerName:req.body.customerName,
            contactLastName: req.body.contactLastName,
            contactFirstName: req.body.contactFirstName,
            phone: req.body.phone,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.city,
            state: req.body.state,
            postalCode: req.body.postalCode,
            country: req.body.country,
            salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
            creditLimit: req.body.creditLimit
        };
        console.log(data);
        console.log(req.params.id);
        customersService.update(req.params.id,data,(error,results)=>{
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

