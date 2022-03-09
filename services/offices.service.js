const db = require("../config/db.config");

exports.getAll = (callback) => {
    db.query("SELECT * FROM `offices`", (error, results, fields)=>{
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};
exports.getNumberOffices = (callback) => {
    db.query("SELECT COUNT(officeCode) AS nbOffice FROM offices", (error,results,fields) => {
        if(error){
            return callback(error);
        }else{
            return(callback(null,results));
        }
    });
};
exports.getEmployeeFromOffice = (id,callback) => {
    db.query(`SELECT * FROM employees INNER JOIN offices ON offices.officeCode = employees.officeCode WHERE offices.officeCode = ?`,
        [id],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};

exports.add = (data, callback) => {
    db.query(
        `INSERT INTO offices 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.officeCode, data.city, data.phone, data.addressLine1, data.addressLine2, data.state, data.country, data.postalCode, data.territory],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};
exports.edit = (id, data, callback) => {
    db.query(`UPDATE offices set city=?, phone=?, addressLine1=?, addressLine2=?, state=?, country=?, postalCode=?, territory=? WHERE officeCode = ?`,
        [data.city, data.phone, data.addressLine1, data.addressLine2, data.state, data.country, data.postalCode, data.territory, id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Update succeeded!");
            }
        });
};
exports.delete = (id,callback) => {
    db.query(`DELETE FROM offices WHERE officeCode = ?`,
        [id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Delete succeeded!");
            }
        });
};