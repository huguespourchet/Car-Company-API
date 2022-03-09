const db = require("../config/db.config");

exports.getAllLines = (callback) => {
    db.query("SELECT productLine FROM products", (error, results, fields)=>{
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};
exports.add = (data, callback) => {
    db.query(
        `INSERT INTO products (productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.productCode, data.productName, data.productLine, data.productScale, data.productVendor, data.productDescription, data.quantityInStock, data.buyPrice, data.MSRP],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};
exports.edit = (id, data, callback) => {
    db.query(`UPDATE products set productName=?, productLine=?, productScale=?, productVendor=?, productDescription=?, quantityInStock=?, buyPrice=?, MSRP=? WHERE productCode = ?`,
        [data.productName, data.productLine, data.productScale, data.productVendor, data.productDescription, data.quantityInStock, data.buyPrice, data.MSRP, id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Update succeeded!");
            }
        });
};
exports.delete = (id,callback) => {
    db.query(`DELETE FROM products WHERE productCode = ?`,
        [id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Delete succeeded!");
            }
        });
};
