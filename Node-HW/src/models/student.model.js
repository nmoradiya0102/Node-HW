const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        Student_name : {
            type : String,
            trim : true
        },
        Student_age : {
            type : Number,
            default : 0
        },
        Student_DOB : {
            type : String,
            trim : true
        },
        Student_standard : {
            type : Number,
            default : 0
        },
        School : {
            type : mongoose.type.objectId,
            ref : "school"
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);


const Student = mongoose.model("student" , studentSchema);
module.exports = Student