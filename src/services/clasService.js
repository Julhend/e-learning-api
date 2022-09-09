const httpStatus = require('http-status');
const { Class } = require('../models/Class');
const { User } = require('../models/User');
const ApiError = require('../utils/ApiError');
const { getUserById } = require('./userService');


const createClass = async (classBody) => Class.create(classBody);


const getClassById = async (classId) => {
  const data = await Class.findByPk(classId);
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, 'Class not found.');
  return data;
};

const getClass = async (query) => {
  const data = await Class.findAll({
    where: query,
  });
  if (!data.length) throw new ApiError(httpStatus.NOT_FOUND, 'Class not found.');
  return data;
};
const getClassStudent = async (userId) => {
  const user = await getUserById(userId)
  const data = await Class.findAll({
  where:{
    id: user.classId
  }
  });
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, 'Class not found.');
  return data;
};

const updateClassById = async (classId, dataBody) => {
  const data = await getClassById(classId);

  Object.assign(data, dataBody);
  await data.save();

  return data;
};

const deleteClassById = async (classId) => {
  const data = await getClassById(classId);
  await data.destroy();
  return data;
};

module.exports = {
  createClass,
  getClassById,
  getClass,
  updateClassById,
  deleteClassById,
  getClassStudent
};
