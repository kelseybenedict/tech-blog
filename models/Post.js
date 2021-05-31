const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    // Title and message of a post are strings
    title: DataTypes.STRING, 
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post;
