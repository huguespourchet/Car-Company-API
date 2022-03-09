const Sequelize = require('sequelize');
const sequelize = require("../config/db2.config");


const Post = sequelize.define('post', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagePath: {
        type: Sequelize.STRING,
        allowNull: true
    },
    likeCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dislikeCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    datetimeCreated: {
        type: Sequelize.DATE,
        allowNull: true
    },
    addedByUserId: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
    }, {
    tableName: 'posts'
    });

module.exports = Post;