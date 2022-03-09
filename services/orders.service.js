const db = require("../config/db.config");

exports.getLastOrderFromCustomer = (id,callback) => {
    db.query(`SELECT orderdetails.* FROM orderdetails INNER JOIN orders ON orders.orderNumber = orderdetails.orderNumber INNER JOIN customers ON customers.customerNumber = orders.customerNumber WHERE orders.orderNumber = (SELECT orderNumber FROM orders INNER JOIN customers ON customers.customerNumber = orders.customerNumber WHERE customers.customerNumber = ? ORDER BY orders.orderDate DESC LIMIT 1)`,
        [id],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};

exports.getProductsByOrderId = (id,callback) => {
    db.query(`SELECT products.* FROM products INNER JOIN orderdetails ON orderdetails.productCode = products.productCode WHERE orderdetails.orderNumber = ?`,
        [id],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};
exports.addProductsToOrderById = (id,data,callback) => {
    db.query(`INSERT INTO orderdetails VALUES (?,?,?,?,?)`,
        [id,data.productCode,data.quantityOrdered,data.priceEach,data.orderLineNumber],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};
exports.deleteProductsFromOrderById = (id,idp,callback) => {
    db.query('DELETE FROM orderdetails WHERE orderNumber = ? AND productCode = ?',
        [id,idp],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Delete succeeded!");
            }
        });
};
exports.updateQuantityOrdered = (id,idp,nb,callback) => {
    db.query('UPDATE orderdetails SET quantityOrdered=? WHERE orderNumber=? AND productCode=?',
        [nb,id,idp],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Update succeeded!");
            }
        });
};