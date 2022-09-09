const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    email: Joi.string().email().max(32).required(),
    password: Joi.string().min(8).max(32).required(),
    firstName: Joi.string().max(12).required(),
    lastName: Joi.string().max(32).required(),
    gender: Joi.string().required(),
    roleName: Joi.string(),
    classId: Joi.string().min(30).max(64),
  }),
};

const login = {
  body: Joi.object().keys({
    identity: Joi.string().max(32).required(),
    password: Joi.string().min(8).max(32).required(),
  }),
};

const refresh = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const resetPassword = {
  body: Joi.object().keys({
    password: Joi.string().min(8).max(32).required(),
  }),
};

module.exports = {
  register,
  login,
  refresh,
  resetPassword,
};
