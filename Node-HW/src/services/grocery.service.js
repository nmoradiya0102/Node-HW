const { Grocery } = require("../models");

/**
 * Create Grocery
 * @param {object} reqBody
 * @returns {Promise<Grocery>}
 */
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

/**
 * Get Grocery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Grocery>}
 */
const getGroceryList = async (filter, options) => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Grocery.find({$or:[{is_active:true}]});
};

/**
 * Get Grocery details by id
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>}
 */
const getGroceryById = async (groceryId) => {
  return Grocery.findById(groceryId);
};

/**
 * Delete Grocery
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>}
 */
const deleteGrocery = async (groceryId) => {
  return Grocery.findByIdAndDelete(groceryId);
};


//  update grocery detail
const updateGrocery = async (groceryId , updateBody) =>{
  return Grocery.findByIdAndUpdate(groceryId , {$set : updateBody});
}

module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryById,
  deleteGrocery,
  updateGrocery,
};