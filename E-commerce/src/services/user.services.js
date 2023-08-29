const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createuser = async (reqBody) => {
  return User.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getuserlist = async () => {
  return User.find();
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getuserbyemail = async (email) => {
  return User.findOne({ email });
};

/**
 * Get user details by id
 * @param {ObjectId} user_id
 * @returns {Promise<User>}
 */
const getuserbyid = async (user_id) => {
  return User.findById(user_id);
};

/**
 * user details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<User>}
 */
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