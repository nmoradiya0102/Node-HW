const Joi = require("joi");

/** create movie */
const createMovie = {
  body: Joi.object().keys({
    movie_theatre_name : Joi.string().required().trim(),
    movie_name: Joi.string().required().trim(),
    movie_releasing_date : Joi.number().integer().required(),
    movie_cast_name: Joi.string().required().trim(),
    movie_rating: Joi.number().integer().required(),
    movie_comment: Joi.string().required().trim(),
  }),
};

/** Get movie list */
const getMovieList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get movie details by id */
const getDetails = {
  params: Joi.object().keys({
    movieId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createMovie,
  getMovieList,
  getDetails,
};