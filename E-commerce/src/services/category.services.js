const { Category } = require("../models");

// create category
const createcategory = async (reqbody) => {
  return Category.create(reqbody);
};

// Get category list
const getcategorylist = async (filter , options) => {
    return Category.find({ $or :[{is_active : true}]});
};

// Get category by name
const getcategorybyname = async(category_name)=>{
  return Category.findOne({category_name})
}

// Get Category by id
const getcategorybyid = async(category_id) => {
  return Category.findById(category_id);
}

// Delete Category by id
const deletecategory = async(category_id) => {
  return Category.findByIdAndDelete((category_id));
}

module.exports = {
    createcategory,
    getcategorylist,
    getcategorybyname,
    getcategorybyid,
    deletecategory
}