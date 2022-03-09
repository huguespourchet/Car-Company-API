const db = require("../config/db.config");

exports.getMounthWithBiggestAmount = (year, callback) => {
    db.query(`SELECT MONTH(paymentDate) FROM payments WHERE YEAR(paymentDate) = ? GROUP BY MONTH(paymentDate) ORDER BY SUM(amount) DESC LIMIT 1`,
        [year],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};

exports.getAllPaymentsByDate = (date,callback) => {
    db.query(`SELECT SUM(amount) as totalAmount FROM payments WHERE DATEDIFF(paymentDate, ?) < 1`,
        [date],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};

exports.getAllAmountFromTo = (annee1, annee2,callback) => {
    db.query(`SELECT SUM(amount) as totalAmount FROM payments WHERE YEAR(paymentDate) >= ? OR YEAR(paymentDate) <= ?`,
        [annee1, annee2],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};
exports.getAllAmountFromToMonth = (mois1, mois2, annee,callback) => {
    db.query(`SELECT SUM(amount) as totalAmount FROM payments WHERE YEAR(paymentDate) = ? AND (MONTH(paymentDate) >= ? OR MONTH(paymentDate) <= ?)`,
        [annee,mois1, mois2],
        function (error, results) {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
};