const httpStatus = require('http-status');
const { Subject } = require('../models/Subject');
const { Class } = require('../models/Class');
const ApiError = require('../utils/ApiError');

const createSubject = async (subjectBody) => Subject.create(subjectBody);

const getSubjectById = async (subjectId) => {
  const data = await Subject.findByPk(subjectId);
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found.');
  return data;
};

const getAllSubject = async (query) => {
  const data = await Subject.findAll({
    where: query,
    include: [{ model: Class }],
  });
  if (!data.length) throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found.');
  return data;
};

const updateSubjectById = async (subjectId, dataBody) => {
  const data = await getSubjectById(subjectId);
  Object.assign(data, dataBody);
  await data.save();

  return data;
};

const deleteSubjectById = async (subjectId) => {
  const data = await getSubjectById(subjectId);
  await data.destroy();
  return data;
};

module.exports = {
  createSubject,
  getSubjectById,
  getAllSubject,
  updateSubjectById,
  deleteSubjectById,
};
