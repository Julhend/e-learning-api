module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'classId',
    {
      type: Sequelize.STRING,
      references: {
        model: 'classes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  ),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn(
    'users',
    'classId',
  ),
};
