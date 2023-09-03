const { Product } = require("../models");

// Get product by product name
const getproductbyname = async(product_name) => {
    return Product.findOne({product_name});
}


//  Create product
const createproduct = async(reqBody) => {
    return Product.create(reqBody);
};

//  Get Product list
const getproductlist = async() => {
    return Product.find();
}


//  Get product by id
const getproductbyid = async(product_id) => {
    return Product.findById(product_id);
}

//  Delete product by id
const deleteproduct = async(product_id) => {
    return Product.findByIdAndDelete(product_id);
}

module.exports = {
    createproduct,
    getproductbyname,
    getproductlist,
    getproductbyid,
    deleteproduct
}