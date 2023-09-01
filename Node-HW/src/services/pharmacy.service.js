const { Pharmacy } = require("../models");

/**
 * Create pharmacy
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */
const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

/**
 * Get pharmacy list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyList = async (filter, options) => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Pharmacy.find({$or:[{is_active:true}]});
};

/**
 * Get pharmacy details by id
 * @param {ObjectId} stationeryId
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyById = async (pharmacyId) => {
  return Pharmacy.findById(pharmacyId);
};

/**
 * Delete pharmacy
 * @param {ObjectId} pharmacyId
 * @returns {Promise<Pharmacy>}
 */
const deletePharmacy = async (pharmacyId) => {
  return Pharmacy.findByIdAndDelete(pharmacyId);
};

// update pharmacy
const updatePharmacy = async ( pharmacyId , updateBody) => {
  return Pharmacy.findByIdAndUpdate(pharmacyId , {$set : updateBody});
}

module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyById,
  deletePharmacy,
  updatePharmacy,
};