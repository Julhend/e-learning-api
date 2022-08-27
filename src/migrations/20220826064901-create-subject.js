module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('subjects', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    subjectName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    picPath: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    classId: {
      type: Sequelize.STRING,
      references: {
        model: 'classes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('subjects'),
};
