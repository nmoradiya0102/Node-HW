const { Hotel } = require("../models");

/**
 * Create Hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

/**
 * Get Hotel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Hotel>}
 */
const getHotelList = async (filter, options) => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Hotel.find({$or:[{is_active:true}]});
};

/**
 * Get hotel details by id
 * @param {ObjectId} hotelId
 * @returns {Promise<Hotel>}
 */
const getHotelById = async (hotelId) => {
  return Hotel.findById(hotelId);
};

/**
 * Delete hotel
 * @param {ObjectId} hotelId
 * @returns {Promise<Hotel>}
 */
const deleteHotel = async (hotelId) => {
  return Hotel.findByIdAndDelete(hotelId);
};

// update hotel detail
const updateHotel = async (hotelId , updateBody) => {
  return Hotel.findByIdAndUpdate(hotelId , {$set : updateBody});
}


module.exports = {
  createHotel,
  getHotelList,
  getHotelById,
  deleteHotel,
  updateHotel,
};