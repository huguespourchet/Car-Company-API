const employeesService = require("../services/employees.service");

exports.index = (req,res) => {
    employeesService.getAll((error,results)=>{
        if(error){
            console.log(error);
            res.render('employees/index', { employees: null });
        }
        res.render('employees/index', { employees: results });
    });
};

exports.getall = (req,res,next) => {
    employeesService.getAll((error,results) => {
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
exports.get2employeeswithmostcust = (req,res,next) => {
    employeesService.get2FristEmployeesWithMostCustomers((error,results) => {
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
exports.edit = (req,res,next)=>{
    employeesService.getEmployeeById(req.params.id,(error,results)=>{
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
exports.getReportsTo = (req,res,next)=>{
    employeesService.getReportsToById(req.params.id,(error,results)=>{
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