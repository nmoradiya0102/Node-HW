const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqbody
 * @returns {Promise<Category>}
 */
const createcategory = async (reqbody) => {
  return Category.create(reqbody);
};

/**
 * Get category list
 * @returns {Promise<Category>}
 */
const getcategorylist = async () => {
    return Category.find();
};

/**
 * Get category by name
 * @param {object} category_name
 * @returns {Promise<Category>}
 */
const getcategorybyname = async(category_name)=>{
  return Category.findOne({category_name})
}

/**
 * Get Category by id
 * @param {object} category_id
 * @returns {Promise<Category>}
 */
const getcategorybyid = async(category_id) => {
  return Category.findById(category_id);
}

/**
* Delete Category by id
* @param {object} category_id
* @returns {Promise<Category>}
*/
const deletecategory = async(category_id) => {
  return Category.findByIdAndDelete((category_id));
}

module.exports = {
    createcategory,
    getcategorylist,
    getcategorybyname,
    getcategorybyid,
    deletecategory
}