const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  }
});

// Relationships
User.hasMany(Task, { foreignKey: 'UserId' });
Task.belongsTo(User, { foreignKey: 'UserId' });

module.exports = Task;