const httpStatus = require('http-status');
const { getClassById } = require('../services/clasService');
const { getAllSubject, updateSubjectById, deleteSubjectById, createSubject } = require('../services/subjectService');

const catchAsync = require('../utils/catchAsync');

const createNewSubject = catchAsync(async (req, res) => {
  const subjectBody = req.body
  await getClassById(subjectBody.classId)
  const data = await createSubject(subjectBody);
  res.sendWrapped(data, httpStatus.CREATED);
});

const getSubject = catchAsync(async (req, res) => {
  const { query } = req;
  const data = await getAllSubject(query);
  res.sendWrapped(data, httpStatus.OK);
});

const updateSubject = catchAsync(async (req, res) => {
  const { subjectId } = req.params;
  const subjectBody = req.body;
  const data = await updateSubjectById(subjectId, subjectBody);
  res.sendWrapped(data, httpStatus.OK);
});

const deleteSubject = catchAsync(async (req, res) => {
  const { subjectId } = req.params;
  await deleteSubjectById(subjectId);
  res.sendWrapped('Subject deleted successfully', httpStatus.OK);
});
module.exports = {
  createNewSubject,
  getSubject,
  updateSubject,
  deleteSubject,
};
