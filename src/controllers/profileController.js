const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const userService = require('../services/userService');
const { getClassById } = require('../services/clasService');

const currentProfile = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const user = await userService.getUserById(userId);
  res.sendWrapped(user, httpStatus.OK);
});
const userByEmail = catchAsync(async (req, res) => {
  const {email} = req.params
  const user = await userService.getUserByEmail(email);
  res.sendWrapped(user, httpStatus.OK);
});

const updateProfile = catchAsync(async(req,res)=>{
  userService.updateUserById

  const { userId } = req.params;
  const userBody = req.body;
  if(userBody.classId){
    await getClassById(userBody.classId)
  }
  const user = await  userService.updateUserById(userId, userBody);
  res.sendWrapped(user, httpStatus.OK);
})
module.exports = {
  currentProfile,
  updateProfile,
  userByEmail
};
