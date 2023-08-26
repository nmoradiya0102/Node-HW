const mongoose = require("mongoose");

/** school Schema */
const schoolSchema = new mongoose.Schema(
    {
        school_name : {
            type : String,
            trim :true
        },
        school_address : {
            type : String,
            trim :true
        },
        school_student_name : {
            type : String,
            trim :true
        },
        school_student_age : {
            type : String,
            trim :true
        },
        school_rank :{
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

const School = mongoose.model("school", schoolSchema);
module.exports = School;
