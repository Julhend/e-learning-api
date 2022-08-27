const {
  sequelize,
  SequelizeInstance,
  DataTypes,
} = require('../config/database');

const Class = sequelize.define(
  'class',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: SequelizeInstance.UUIDV4,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      unique: true,
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
  Class,
};
