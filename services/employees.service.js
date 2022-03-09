const db = require("../config/db.config");

exports.getAll = (callback) => {
    db.query("SELECT * FROM employees", (error, results,fields) => {
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
        });
};
exports.get2FristEmployeesWithMostCustomers= (callback) => {
    db.query("SELECT employees.employeeNumber FROM employees INNER JOIN customers ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.employeeNumber ORDER BY COUNT(employees.employeeNumber) DESC LIMIT 2;",
        (error, results, fields) => {
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};
// exports.get2FristEmployeesCustomersBiggestPayments= (callback) => {
//     db.query("SELECT employees.employeeNumber FROM employees INNER JOIN customers ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.employeeNumber ORDER BY COUNT(employees.employeeNumber) DESC LIMIT 2;",
//         (error, results, fields) => {
//             if(error){
//                 return callback(error);
//             }else{
//                 return callback(null, results);
//             }
//         });
// };

exports.getEmployeeById = (id,callback) => {
    db.query(`SELECT * from employees WHERE employeeNumber = ?`,
        [id],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};
exports.getReportsToById = (id,callback) => {
    db.query(`SELECT * from employees WHERE reportsTo = ?`,
        [id],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};