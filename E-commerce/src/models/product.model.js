// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   // Add more fields as needed
// });

// module.exports = mongoose.model('Product', productSchema);


const mongoose = require("mongoose");

const product_Schema = new mongoose.Schema(
    {
        product_name: {
            type:String,
            trim:true
        },
        product_desc: {
            type:String,
            trim:true
        },
        product_price: {
            type: Number,
            default:0
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

const product = mongoose.model("Product",product_Schema);
module.exports = product;