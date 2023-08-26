const {Book} = require("../models")

/**
 * Create Book
 * @param { object } reqBody
 * @returns { Promise<Book>}
 */

const createBook = async(reqBody) => {
    // return Book.create(reqBody);
    return Book.create(reqBody)
};

/**
 * Get category list
 * @param { object } filter
 * @param { object } options
 * @returns { promise<Book>}
 */

const getbooklist = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Book.find({$or:[{is_active:true}]});
};

module.exports = {
    createBook,
    getbooklist
}