const {
  sequelize,
  SequelizeInstance,
  DataTypes,
} = require('../config/database');

const Comment = sequelize.define(
  'comment',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: SequelizeInstance.UUIDV4,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

module.exports = {
  Comment,
};
