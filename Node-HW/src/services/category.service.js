const { Category } = require("../models");

/**
 * category user
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getCategoryList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Category.find({$or:[{is_active:true}]});
};

const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

const getCategoryByName = async(categoryName) => {
  return Category.findOne({ categoryName });
};

const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory,
    getCategoryById,
    getCategoryByName,
    updateDetails,
}
