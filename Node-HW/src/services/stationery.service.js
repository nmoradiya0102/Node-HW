const { Stationery } = require("../models");

/**
 * Create stationery
 * @param {object} reqBody
 * @returns {Promise<Stationery>}
 */
const createStationery = async (reqBody) => {
  return Stationery.create(reqBody);
};

/**
 * Get stationery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Stationery>}
 */
const getStationeryList = async (filter, options) => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Stationery.find({$or:[{is_active:true}]});
};

/**
 * Get stationery details by id
 * @param {ObjectId} stationeryId
 * @returns {Promise<Stationery>}
 */
const getStationeryById = async (stationeryId) => {
  return Stationery.findById(stationeryId);
};

/**
 * Delete stationery
 * @param {ObjectId} stationeryId
 * @returns {Promise<Stationery>}
 */
const deleteStationery = async (stationeryId) => {
  return Stationery.findByIdAndDelete(stationeryId);
};

// update Statinery
const updateStationery = async(stationeryId , updateBody) => {
  return Stationery.findByIdAndUpdate(stationeryId , {$set : updateBody});
}

module.exports = {
  createStationery,
  getStationeryList,
  getStationeryById,
  deleteStationery,
  updateStationery,
};