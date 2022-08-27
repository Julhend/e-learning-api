const httpStatus = require('http-status');
const {
  createComment, getAllComment, updateCommentById, deleteCommentById,
} = require('../services/commentService');
const { getContentById } = require('../services/contentService');
const { getUserById } = require('../services/userService');

const catchAsync = require('../utils/catchAsync');

const createNewComment = catchAsync(async (req, res) => {
  const { body } = req;
  body.userId = req.user.id;
  await getContentById(body.contentId);
  const data = await createComment(body);
  res.sendWrapped(data, httpStatus.CREATED);
});

const getComment = catchAsync(async (req, res) => {
  const { query } = req;
  const data = await getAllComment(query);
  res.sendWrapped(data, httpStatus.OK);
});

const updateComment = catchAsync(async (req, res) => {
  const { commentId } = req.params;
  const { body } = req;
  const data = await updateCommentById(commentId, req.user.id, body);
  res.sendWrapped(data, httpStatus.OK);
});

const deleteComment = catchAsync(async (req, res) => {
  const { commentId } = req.params;
  await deleteCommentById(commentId, req.user.id);
  res.sendWrapped('Comment deleted successfully', httpStatus.OK);
});
module.exports = {
  createNewComment,
  getComment,
  updateComment,
  deleteComment,
};
