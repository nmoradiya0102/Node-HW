const Joi = require("joi");

const createCategory = {
    body : Joi.object().keys({
        category_name : Joi.string().required().trim(),
        category_desc : Joi.string().required().trim()
    })
};

// const getCategoryList = {
//     query : joi.object().keys({
//     search : joi.string().trim().allow(""),
//     sortBy : joi.string().trim().allow(""),
//     limit : joi.number().integer().allow(""),
//     page : joi.number().integer().allow(""),
//     }),
// };

module.exports = {
    createCategory,
    // getCategoryList
}
