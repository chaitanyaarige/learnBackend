'use strict';
module.exports = {
  up: (queryInterface, typeOrm) => {
    return queryInterface.createTable('TodoItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: typeOrm.INTEGER
      },
      description: {
        type: typeOrm.STRING
      },
      todoId: {
        type: typeOrm.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Todos',
          key: 'id',
          as: 'todoId',
        },
      },
      createdAt: {
        allowNull: false,
        type: typeOrm.DATE
      },
      updatedAt: {
        allowNull: false,
        type: typeOrm.DATE
      }
    });
  },
  down: (queryInterface, typeOrm) => {
    return queryInterface.dropTable('TodoItems');
  }
};