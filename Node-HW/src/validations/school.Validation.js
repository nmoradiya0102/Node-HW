const Joi = require("joi");

/** create school */
const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    school_address: Joi.string().required().trim(),
    school_student_name: Joi.string().required().trim(),
    school_student_age: Joi.number().integer().required(),
    school_rank : Joi.number().integer().required(),
  }),
};

/** Get school list */
const getSchoolList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get school details by id */
const getDetails = {
  params: Joi.object().keys({
    schoolId: Joi.string().required().trim(),
  }),
};


module.exports = {
  createSchool,
  getSchoolList,
  getDetails,
};