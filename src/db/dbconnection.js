const mongoose = require ("mongoose");
const config = require("../config/config");

const connectDb = async () =>{
    mongoose
    .connect(config.mongodb.url, config.mongodb.options)
    .then((data) => {
        console.log("Database connection successfully..");
    })
    .catch((error) => {
        console.log("Database Connection error : " , error);
    });
};

module.exports = {connectDb};