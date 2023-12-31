const mongoose = require("mongoose");

/** grocery Schema */
const grocerySchema = new mongoose.Schema(
    {
        grocery_store_name : {
            type : String,
            trim :true
        },
        grocery_name : {
            type : String,
            trim :true
        },
        grocery_quantity : {
            type : Number,
            default : 0
        },
        grocery_price : {
            type : Number,
            default : 0
        },
        is_active: {
            type: Boolean,
            default: true,
          },
    },
    {
        timestamps: true,
        versionKey: false,
      }
);

const Grocery = mongoose.model("grocery", grocerySchema);
module.exports = Grocery;
