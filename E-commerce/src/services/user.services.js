const { User } = require("../models");

//  create user
const createuser = async (reqBody) => {
  return User.create(reqBody);
};

// Get user list
const getuserlist = async () => {
  return User.find();
};

// Get user by email
const getuserbyemail = async (email) => {
  return User.findOne({ email });
};

// Get user details by id
const getuserbyid = async (user_id) => {
  return User.findById(user_id);
};

//  user details update by id
const updatedetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteuser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createuser,
  getuserlist,
  getuserbyid,
  updatedetails,
  getuserbyemail,
  deleteuser,
};