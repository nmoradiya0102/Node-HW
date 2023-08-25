const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movie_theatre_name : {
            type : String,
            trim :true
        },
        movie_name : {
            type : String,
            trim :true
        },
        movie_releasing_date : {
            type : String,
            trim : true
        },
        movie_cast_name : {
            type : String,
            trim :true
        },
        movie_rating : {
            type : String,
            trim :true
        },
        movie_comment : {
            type : String,
            trim :true
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

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
