const Joi = require("joi");

/** create category */
const create_Blog = {
  body: Joi.object().keys({
    blog_title : Joi.string().required().trim(),
    blog_content : Joi.string().required().trim(),
    blog_author : Joi.string().required().trim(),
    blog_publicationDate : Joi.string().required().trim(),
    blog_categories : Joi.string().required().trim(),
    blog_tags : Joi.string().required().trim(),
    blog_comments : Joi.string().required().trim(),
  }),
};

module.exports = {
    create_Blog
}