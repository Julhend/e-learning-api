module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('contents', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    contentName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    fileOne: {
      type: Sequelize.STRING,
    },
    fileTwo: {
      type: Sequelize.STRING,
    },
    fileThree: {
      type: Sequelize.STRING,
    },
    fileFour: {
      type: Sequelize.STRING,
    },
    videoUrl: {
      type: Sequelize.STRING,
    },
    subjectId: {
      type: Sequelize.STRING,
      references: {
        model: 'subjects',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    userId: {
      type: Sequelize.STRING,
      references: {
        model: 'users',
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
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('contents'),
};
