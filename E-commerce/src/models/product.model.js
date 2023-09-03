const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type:String,
            trim:true
        },
        product_description: {
            type:String,
            trim:true
        },
        product_price: {
            type: Number,
            default:0
        },
        Category:{
            type : mongoose.type.objectId,
            ref : "Category"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    });

const product = mongoose.model("Product",productSchema);
module.exports = product;