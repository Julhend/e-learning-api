const { sequelize } = require('../config/database');
const { User } = require('./User');
const { Role } = require('./Role');
const { Curriculum } = require('./Curriculum');
const { Grade } = require('./Grade');
const { GradeGroup } = require('./GradeGroup');
const { Class } = require('./Class');
const { Subject } = require('./Subject');
const { Content } = require('./Content');
const { Comment } = require('./Comment');

const setupSequelizeAssociations = async () => {
  User.belongsTo(Role);
  Role.hasMany(User);

  Curriculum.hasMany(GradeGroup, {
    foreignKey: 'curriculumId',
  });

  GradeGroup.belongsTo(Curriculum, {
    foreignKey: 'curriculumId',
  });

  GradeGroup.hasMany(Grade, {
    foreignKey: 'gradeGroupId',
  });

  Grade.belongsTo(GradeGroup, {
    foreignKey: 'gradeGroupId',
  });

  Subject.belongsTo(Class);
  Class.hasMany(Subject);

  Content.belongsTo(Subject);
  Subject.hasMany(Content);

  Content.belongsTo(User);
  User.hasMany(Content);

  Comment.belongsTo(User);
  User.hasMany(Comment);

  Comment.belongsTo(Content);
  Content.hasMany(Comment);

  User.belongsTo(Class);
  Class.hasMany(User);

  // finally sync sequelize
  // await sequelize.sync();
};

module.exports = setupSequelizeAssociations;
