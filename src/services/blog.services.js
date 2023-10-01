const { Blog } = require("../model");

// blog
const create_Blog = async (reqBody) => {
  return Blog.create(reqBody);
};

// Get Blog list
const get_Blog_List = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Blog.find();
};

// Get Blog by name
const get_Blog_By_Title = async (blog_title) => {
  return Blog.findOne({ blog_title });
};

// Get blog details by id
const get_Blog_By_Id = async (blogId) => {
  return Blog.findById(blogId);
};

// update blog
const update_Blog = async (blogId, reqBody) => {
  return Blog.findByIdAndUpdate(blogId, { $set: reqBody });
};

// Delete blog
const delete_Blog = async (blogId) => {
  return Blog.findByIdAndDelete(blogId);
};

module.exports = {
    create_Blog,
    get_Blog_List,
    get_Blog_By_Title,
    get_Blog_By_Id,
    update_Blog,
    delete_Blog,
}