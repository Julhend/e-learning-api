const httpStatus = require('http-status');
const { createClass, getClass, updateClassById, deleteClassById, getClassStudent } = require('../services/clasService');

const catchAsync = require('../utils/catchAsync');

const createNewClass = catchAsync(async (req, res) => {
  const classBody = req.body
  const data = await createClass(classBody);
  res.sendWrapped(data, httpStatus.CREATED);
});

const getCLassesStudent = catchAsync(async (req, res) => {
  const { query, user } = req;
  let data
  if (user.role === 'teacher') {

    data = await getClass(query);
  } else {
    data = await getClassStudent(user.id)
  }
  res.sendWrapped(data, httpStatus.OK);
});

const getCLasses = catchAsync(async (req, res) => {
  const { query, user } = req;
  let data
  if (user.role === 'teacher') {

    data = await getClass(query);
  } else {
    data = await getClassStudent(user.id)
  }
  res.sendWrapped(data, httpStatus.OK);
});

const getCLassesPublic = catchAsync(async (req, res) => {
  const { query } = req;
  let data

  data = await getClass(query);
  res.sendWrapped(data, httpStatus.OK);
});

const updateClass = catchAsync(async (req, res) => {
  const { classId } = req.params;
  const classBody = req.body;
  const data = await updateClassById(classId, classBody);
  res.sendWrapped(data, httpStatus.OK);
});

const deleteClass = catchAsync(async (req, res) => {
  const { classId } = req.params;
  await deleteClassById(classId);
  res.sendWrapped('Class deleted successfully', httpStatus.OK);
});
module.exports = {
  createNewClass,
  getCLasses,
  updateClass,
  deleteClass,
  getCLassesPublic,
  getCLassesStudent
};
