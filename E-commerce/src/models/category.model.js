// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   // Add more fields as needed
// });

// module.exports = mongoose.model('Category', categorySchema);


const mongoose = require("mongoose");

const category_Schema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true
        },
        category_desc: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
            timestamps: true,
            versionKey: false
    }
);

const category = mongoose.model("Category",category_Schema);
module.exports = category;