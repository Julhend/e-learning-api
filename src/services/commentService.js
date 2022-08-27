const httpStatus = require('http-status');
const { Comment } = require('../models/Comment');
const { User } = require('../models/User');
const ApiError = require('../utils/ApiError');

const createComment = async (commentBody) => Comment.create(commentBody);

const getCommentById = async (commentId) => {
  const data = await Comment.findByPk(commentId);
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found.');
  return data;
};

const getAllComment = async (query) => {
  const data = await Comment.findAll({
    where: query,
    include: [{ model: User }],
  });
  if (!data.length) throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found.');
  return data;
};

const updateCommentById = async (commentId, userId, dataBody) => {
  const data = await getCommentById(commentId);
  if (userId !== data.userId) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "You can't update other people comment");
  Object.assign(data, dataBody);
  await data.save();

  return data;
};

const deleteCommentById = async (commentId, userId) => {
  const data = await getCommentById(commentId);
  if (userId !== data.userId) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "You can't delete other people comment");
  await data.destroy();
  return data;
};

module.exports = {
  createComment,
  getCommentById,
  getAllComment,
  updateCommentById,
  deleteCommentById,
};
