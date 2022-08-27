const {
  sequelize,
  SequelizeInstance,
  DataTypes,
} = require('../config/database');

const Content = sequelize.define(
  'content',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: SequelizeInstance.UUIDV4,
      allowNull: false,
    },
    contentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    fileOne: {
      type: DataTypes.STRING,
    },
    fileTwo: {
      type: DataTypes.STRING,
    },
    fileThree: {
      type: DataTypes.STRING,
    },
    fileFour: {
      type: DataTypes.STRING,
    },
    videoUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    paranoid: true,
  },
);

module.exports = {
  Content,
};
