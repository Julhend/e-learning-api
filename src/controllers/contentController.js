const httpStatus = require('http-status');
const {
  getAllContent, updateContentById, deleteContentById, createContent,
} = require('../services/contentService');
const { getSubjectById } = require('../services/subjectService');
const ApiError = require('../utils/ApiError');

const catchAsync = require('../utils/catchAsync');

const createNewContent = catchAsync(async (req, res) => {
  const { body } = req;
  body.userId = req.user.id;
  if (req.user.role === 'student') throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Your role is ${req.user.role}, you can't ude this feature`);
  await getSubjectById(body.subjectId);
  if (req.file) {
    body.fileOne = `uploads/${req.file.originalname.replaceAll(' ', '%20')}`;
  }
  const data = await createContent(body);
  res.sendWrapped(data, httpStatus.CREATED);
});

const getContent = catchAsync(async (req, res) => {
  const { query } = req;
  const data = await getAllContent(query);
  res.sendWrapped(data, httpStatus.OK);
});

const updateContent = catchAsync(async (req, res) => {
  const { contentId } = req.params;
  const { body } = req;
  if (req.user.role === 'student') throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Your role is ${req.user.role}, you can't ude this feature`);
  let filePath = body.fileOne;
  if (req.file) {
    filePath = `uploads/${req.file.originalname.replaceAll(' ', '%20')}`;
  }
  const data = await updateContentById(contentId, body);
  res.sendWrapped(data, httpStatus.OK);
});

const deleteContent = catchAsync(async (req, res) => {
  const { contentId } = req.params;
  if (req.user.role === 'student') throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Your role is ${req.user.role}, you can't ude this feature`);
  await deleteContentById(contentId);
  res.sendWrapped('Content deleted successfully', httpStatus.OK);
});
module.exports = {
  createNewContent,
  getContent,
  updateContent,
  deleteContent,
};
