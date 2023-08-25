const mongoose = require("mongoose");

const stationerySchema = new mongoose.Schema(
    {
        stationery_name : {
            type : String,
            trim : true
        },
        stationery_address : {
            type : String,
            trim : true
        },
        stationery_order_quantity :{
            type : String,
            trim : true
        },
        stationery_items_name : {
            type : String,
            trim : true
        },
        stationery_items_price : {
            type : String,
            trim : true
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

const Stationery = mongoose.model("stationery", stationerySchema);
module.exports = Stationery;
