const Joi = require("joi");

/** create music */
const createMusic = {
  body: Joi.object().keys({
    music_name: Joi.string().required().trim(),
    music_artist: Joi.string().required().trim(),
    music_album: Joi.string().required().trim(),
    music_rating : Joi.number().integer().required(),
  }),
};

/** Get music list */
const getMusicList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get music details by id */
const getDetails = {
  params: Joi.object().keys({
    musicId: Joi.string().required().trim(),
  }),
};


module.exports = {
  createMusic,
  getMusicList,
  getDetails,
};