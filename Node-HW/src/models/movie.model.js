const mongoose = require("mongoose");

/** movie Schema */
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
            type : Number,
            default : 0
        },
        movie_cast_name : {
            type : String,
            trim :true
        },
        movie_rating : {
            type : Number,
            default : 0
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
