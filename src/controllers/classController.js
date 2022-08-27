const httpStatus = require('http-status');
const { createClass, getClass, updateClassById, deleteClassById } = require('../services/clasService');

const catchAsync = require('../utils/catchAsync');

const createNewClass = catchAsync(async (req, res) => {
  const classBody = req.body
  const data = await createClass(classBody);
  res.sendWrapped(data, httpStatus.CREATED);
});

const getCLasses = catchAsync(async (req, res) => {
  const { query } = req;
  const data = await getClass(query);
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
};
