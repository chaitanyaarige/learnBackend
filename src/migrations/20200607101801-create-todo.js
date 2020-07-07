'use strict';
module.exports = {
  up: (queryInterface, typeOrm) => {
    return queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: typeOrm.INTEGER
      },
      title: {
        type: typeOrm.STRING,
        allowNull: false
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
    return queryInterface.dropTable('Todos');
  }
};