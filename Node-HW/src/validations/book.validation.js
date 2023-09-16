const Joi = require("joi");

/** Create book */
const create_Book= {
    body : Joi.object().keys({
        book_name : Joi.string().required().trim(),
        book_author : Joi.string().required().trim(),
    }),
};


/** Get Book list */
const get_Book_List = {
    query: Joi.object().keys({
      search: Joi.string().trim().allow(""),
      sortBy: Joi.string().trim().allow(""),
      limit: Joi.number().integer().allow(""),
      page: Joi.number().integer().allow(""),
    }),
  };


/** Get Book details by id */
  const get_Details = {
    params: Joi.object().keys({
      bookId: Joi.string().required().trim(),
    }),
  };


/**book details update by id */
  const update_Book = {
    params: Joi.object().keys({
      bookId: Joi.string().required().trim()
    }),
    body : Joi.object().keys({
      book_name: Joi.string().required().trim(),
      book_price: Joi.number().required(),
      author_name: Joi.string().required().trim()
    })
  }


module.exports = {
    create_Book,
    get_Book_List,
    get_Details,
    update_Book
}