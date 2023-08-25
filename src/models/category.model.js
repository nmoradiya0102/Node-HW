const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema({
    category_name : {
        type : String,
        trim : true,
    },
    category_desc : {
        type : String,
        trim : true,
    },
    is_active : {
        type : Boolean,
        default : true,
    },
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const category = mongoose.model("category" , categoryschema)

module.exports = category