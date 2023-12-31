const mongoose = require("mongoose");

/** bus Schema */
const busSchema = new mongoose.Schema(
    {
        bus_name : {
            type : String,
            trim :true
        },
        bus_route : {
            type : String,
            trim :true
        },
        bus_stop : {
            type : String,
            trim : true
        },
        bus_number : {
            type : String,
            trim :true
        },
        bus_ticket_price : {
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

const Bus = mongoose.model("bus", busSchema);
module.exports = Bus;
