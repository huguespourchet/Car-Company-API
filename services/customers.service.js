const db = require("../config/db.config");

exports.getAll = (callback) => {
    db.query("SELECT * FROM `customers`", (error, results, fields)=>{
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};
exports.getNumberCustomers = (callback) => {
    db.query("SELECT COUNT(customerNumber) AS NBCustomers FROM customers", (error,results,fields) => {
        if(error){
            return callback(error);
        }else{
            return(callback(null,results));
        }
    });
};
exports.getCustomerById = (id,callback) => {
    db.query(`SELECT * from customers WHERE customerNumber = ?`,
        [id],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};
exports.getAllCustomersFromEmployee = (id,callback) => {
    db.query(`SELECT * FROM customers 
                INNER JOIN employees on customers.salesRepEmployeeNumber = employees.employeeNumber
                WHERE employees.employeeNumber = ?`,
        [id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, results);
            }
        });
};
exports.register = (data, callback) => {
    db.query(
        `INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.customerNumber, data.customerName, data.contactLastName, data.contactFirstName, data.phone, data.addressLine1, data.addressLine2, data.city, data.state, data.postalCode, data.country, data.salesRepEmployeeNumber, data.creditLimit],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};
exports.update = (id, data, callback) => {
    db.query(`UPDATE customers set customerNumber=?, customerName=?, contactLastName=?, contactFirstName=?, phone=?, addressLine1=?, addressLine2=?, city=?, state=?, postalCode=?, country=?, salesRepEmployeeNumber=?, creditLimit=? WHERE customerNumber = ?`,
        [id, data.customerName, data.contactLastName, data.contactFirstName, data.phone, data.addressLine1, data.addressLine2, data.city, data.state, data.postalCode, data.country, data.salesRepEmployeeNumber, data.creditLimit, id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Update succeeded!");
            }
        });
};
exports.delete = (id,callback) => {
    db.query(`DELETE FROM customers WHERE customerNumber = ?`,
        [id],
        function(error, results){
        if(error){
            return callback(error);
        }else{
            return callback(null, "Delete succeeded!");
        }
        });
};
