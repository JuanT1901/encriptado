const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Todo = sequelize.define("toDo", {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Todo;
