const httpStatus = require('http-status');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const userService = require('../services/userService');
const authService = require('../services/authService');
const tokenService = require('../services/tokenService');
const { tokenTypes } = require('../config/tokens');
const { googleAuth } = require('../utils/googleOauth');
const { getRoleById, getRoleByName } = require('../services/roleService');
const { getClassById } = require('../services/clasService');

const register = catchAsync(async (req, res) => {
  const userBody = req.body;
  const role = userBody.roleName;
  const checkRole = await getRoleByName(role);
  userBody.roleId = checkRole.id;

  if(userBody.classId){
    await getClassById (userBody.classId)
  }
  const user = await userService.createUser(userBody);
  res.sendWrapped(user, httpStatus.CREATED);
});

const loginByGoogle = catchAsync(async (req, res) => {
  const { idToken } = req.body;

  const googleUser = await googleAuth(idToken);
  const { access, refresh } = await tokenService.generateAuthTokens(googleUser);

  const message = 'Login Sucessfully';
  const user = {
    message,
    googleUser,
    access,
    refresh,
  };

  res.sendWrapped(user, httpStatus.OK);
});

const login = catchAsync(async (req, res) => {
  const { identity, password } = req.body;
  const user = await authService.loginWithIdentityAndPassword(
    identity,
    password,
  );
  const role = user.role.roleName;
  console.log();
  const token = await tokenService.generateAuthTokens(user);
  const data = {
    role,
    token,
  };
  res.sendWrapped(data, httpStatus.OK);
});

const refreshTokens = catchAsync(async (req, res) => {
  const { refreshToken } = req.body;
  const tokenData = await authService.refreshAuth(refreshToken);
  const user = await userService.getUserById(tokenData.userId);
  const token = await tokenService.generateAuthTokens(user);
  res.sendWrapped(token, httpStatus.OK);
});

const logout = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const userToken = req.token;
  tokenService.revokeToken(userId, tokenTypes.ACCESS, userToken);
  tokenService.revokeUser(userId);
  res.sendWrapped('Logout success.', httpStatus.OK);
});

const testProtected = catchAsync(async (req, res) => {
  res.sendWrapped('Access granted.', httpStatus.OK);
});

const resetPassword = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { password } = req.body;
  await authService.updatePassword(userId, password);
  res.sendWrapped('Password updated.', httpStatus.OK);
});

module.exports = {
  login,
  refreshTokens,
  register,
  logout,
  testProtected,
  resetPassword,
  loginByGoogle,
};
