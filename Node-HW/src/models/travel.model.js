const mongoose = require("mongoose");

/** travel Schema */
const travelSchema = new mongoose.Schema(
    {
        travel_name : {
            type : String,
            trim :true
        },
        travel_destination : {
            type : String,
            trim :true
        },
        travel_passenger_name : {
            type : String,
            trim :true
        },
        travel_passenger_age : {
            type : Number,
            default : 0
        },
        travel_passenger_gender : {
            type : String,
            trim : true
        },
        Bus : {
            type : mongoose.type.objectId,
            ref : "bus"
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

const Travel = mongoose.model("travel", travelSchema);
module.exports = Travel;
