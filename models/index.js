const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// belongs to a single user
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

//belongs to a single user
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// a post can have multiple comments
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};
