const Joi = require("joi");

const createStudent = {
    body : Joi.object().keys({
        Student_name : Joi.string().required().trim(),
        Student_age : Joi.number().integer().required(),
        Student_DOB : Joi.string().required().trim(),
        Student_standard : Joi.number().integer().required(),
    })
};

module.exports = {
    createStudent
}