const Sequelize = require('sequelize');
const sequelize = require("../config/db2.config");


const Comment = sequelize.define('comment', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    datetimeCreated: {
        type: Sequelize.DATE,
        allowNull: true
    },
    addedByUserId: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
    },{
    tableName: 'comments'
    });

module.exports = Comment;