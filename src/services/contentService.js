const httpStatus = require('http-status');
const { Content } = require('../models/Content');
const { Role } = require('../models/Role');
const { Subject } = require('../models/Subject');
const { User } = require('../models/User');
const ApiError = require('../utils/ApiError');

const createContent = async (contentBody) => Content.create(contentBody);

const getContentById = async (contentId) => {
  const data = await Content.findByPk(contentId);
  // const data = await Content.findByPk('d72fb4fd-b407-4ddb-94a2-50f99cd424e8');
  console.log(contentId);
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, 'Content not found.');
  return data;
};

const getAllContent = async (query) => {
  const data = await Content.findAll({
    where: query,
    include: [{ model: User, include: [{ model: Role }] }, { model: Subject }],
  });
  if (!data.length) throw new ApiError(httpStatus.NOT_FOUND, 'Content not found.');
  return data;
};

const updateContentById = async (contentId, dataBody) => {
  const data = await getContentById(contentId);
  Object.assign(data, dataBody);
  await data.save();

  return data;
};

const deleteContentById = async (contentId) => {
  const data = await getContentById(contentId);
  await data.destroy();
  return data;
};

module.exports = {
  createContent,
  getContentById,
  getAllContent,
  updateContentById,
  deleteContentById,
};
