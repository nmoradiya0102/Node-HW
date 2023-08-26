const Joi = require("joi");

/** Create book */
const create_book_validation = {
    body : Joi.object().keys({
        book_name : Joi.string().required().trim(),
        book_author : Joi.string().required().trim(),
    }),
};

module.exports = {
    create_book_validation
}