const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        blog_title : {
            type : String,
            trim : true,
        },
        blog_content : {
            type : String,
            trim : true,
        },
        blog_author : {
            type : String,
            trim : true,
        },
        blog_publicationDate : {
            type : String,
            trim : true,
        },
        blog_categories : {
            type : String,
            trim : true,
        },
        blog_tags : {
            type : String,
            trim : true,
        },
        blog_comments : {
            type : String,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Blog = mongoose.model("Blog" , blogSchema);
module.exports = Blog;