const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
            required: true,
        },
        product_description: {
            type: String,
            trim: true,
            required: true,
        },
        product_price: {
            type: Number,
            trim: true,
            required: true,
        },
        product_category: {
            type: String,
            trim: true,
            required: true,
        },
        product_manufacture: {
            type: String,
            trim: true,
            required: true,
        },
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    },
);
const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
