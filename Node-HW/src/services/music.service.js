const { Music } = require("../models");

/**
 * Create music
 * @param {object} reqBody
 * @returns {Promise<Music>}
 */
const createMusic = async (reqBody) => {
  return Music.create(reqBody);
};

/**
 * Get music list music
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Music>}
 */
const getMusicList = async (filter, options) => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Music.find({$or:[{is_active:true}]});
};

/**
 * Get Music details by id
 * @param {ObjectId} musicId
 * @returns {Promise<Music>}
 */
const getMusicById = async (musicId) => {
  return Music.findById(musicId);
};

/**
 * Delete music
 * @param {ObjectId} musicId
 * @returns {Promise<Music>}
 */
const deleteMusic = async (musicId) => {
  return Music.findByIdAndDelete(musicId);
};

// update music

const updateMusic = async( musicId , updateBody) => {
  return Music.findByIdAndUpdate(musicId , {$set : updateBody});
}

module.exports = {
  createMusic,
  getMusicList,
  getMusicById,
  deleteMusic,
  updateMusic,
};