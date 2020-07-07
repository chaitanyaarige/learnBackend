'use strict';

module.exports = (typeOrm: any, DataTypes: any) => {
  const TodoItem = typeOrm.define('TodoItem', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  TodoItem.associate = (models: any) => {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  
  return TodoItem;
};