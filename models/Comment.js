const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../config/connection");

class Comment extends Model { }

Comment.init(
    {
        // comments are strings, cannot be empty or blank
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);
module.exports = Comment;

