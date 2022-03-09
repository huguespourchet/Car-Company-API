const paymentService = require("../services/payments.service");

exports.getMounth = (req,res) => {
    paymentService.getMounthWithBiggestAmount(req.params.year, (error,results) =>{
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
exports.getAllByDate = (req,res) => {
    paymentService.getAllPaymentsByDate(req.params.date, (error,results) =>{
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
exports.getAllBetweenYears = (req,res) => {
    paymentService.getAllAmountFromTo(req.params.annee1,req.params.annee2, (error,results) =>{
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
exports.getAllBetweenMonths = (req,res) => {
    paymentService.getAllAmountFromToMonth(req.params.mois1,req.params.mois2, req.params.annee, (error,results) =>{
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