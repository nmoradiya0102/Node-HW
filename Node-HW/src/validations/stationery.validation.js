const Joi = require("joi");

/** create stationery */
const createStationery = {
  body: Joi.object().keys({
    stationery_name: Joi.string().required().trim(),
    stationery_address: Joi.string().required().trim(),
    stationery_order_quantity : Joi.string().required().trim(),
    stationery_items_name: Joi.string().required().trim(),
    stationery_items_price:Joi.number().integer().required(),
  }),
};

/** Get stationery list */
const getStationeryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get stationery details by id */
const getDetails = {
  params: Joi.object().keys({
    stationeryId: Joi.string().required().trim(),
  }),
};


module.exports = {
  createStationery,
  getStationeryList,
  getDetails,
};