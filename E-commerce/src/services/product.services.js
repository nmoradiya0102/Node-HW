const { Product } = require("../models");

/**
 * Get product by product_name
 * @param {string} product_name
 * @returns {Promise<Product>}
 */
const getproductbyname = async(product_name) => {
    return Product.findOne({product_name});
}

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createproduct = async(reqBody) => {
    return Product.create(reqBody);
};

/**
 * Get Product list
 * @returns {Promise<Product>}
 */
const getproductlist = async() => {
    return Product.find();
}

/**
 * Get product by id
 * @param {object} product_id
 * @returns {Promise<Product>}
 */
const getproductbyid = async(product_id) => {
    return Product.findById(product_id);
}

/**
 * Delete product by id
 * @param {object} product_id
 * @returns {Promise<Product>}
 */
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