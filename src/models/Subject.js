const {
  sequelize,
  SequelizeInstance,
  DataTypes,
} = require('../config/database');

const Subject = sequelize.define(
  'subject',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: SequelizeInstance.UUIDV4,
      allowNull: false,
    },
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picPath: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    paranoid: true,
  },
);


module.exports = {
  Subject,
};
