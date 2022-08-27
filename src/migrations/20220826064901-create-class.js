module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('classes', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    class: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    picPath: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
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
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('classes'),
};
