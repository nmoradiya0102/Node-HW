const mongoose = require("mongoose");

/** pharmacy Schema */
const pharmacySchema = new mongoose.Schema(
    {
        pharmacy_name : {
            type : String,
            trim : true
        },
        pharmacy_address : {
            type : String,
            trim : true
        },
        pharmacy_opeaning_hours :{
            type : String,
            trim : true
        },
        pharmacy_product_name : {
            type : String,
            trim : true
        },
        pharmacy_product_price : {
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

const Pharmacy = mongoose.model("pharmacy", pharmacySchema);
module.exports = Pharmacy;
