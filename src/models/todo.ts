'use strict';
module.exports = (sequelize: any, DataTypes: any) => { 
  const Todo = sequelize.define('Todo', { 
    title: { 
      type: DataTypes.STRING, 
      allowNull: false
    }, 
  });   
  
  Todo.associate = (models: any) => {
    // associations can be defined here
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
    });
  };
  return Todo;
};