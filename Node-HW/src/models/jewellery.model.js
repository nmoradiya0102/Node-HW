const mongoose = require("mongoose");

/** jewellery Schema */
const jewellerySchema = new mongoose.Schema(
    {
        jewellery_shop_name : {
            type : String,
            trim :true
        },
        jewellery_type : {
            type : String,
            trim :true
        },
        jewellery_name : {
            type : String,
            trim :true
        },
        jewellery_design : {
            type : String,
            trim :true
        },
        jewellery_price : {
            type : Number,
            default :  0
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

const Jewellery = mongoose.model("jewellery", jewellerySchema);
module.exports = Jewellery;
