const { options } = require("joi");
const Category = require("../models/category.model");
const { categoryService } = require("../services");


const createCategory = async (req , res) => {
    try{
        const reqBody =red.Body;

        const category = await categoryService.createCategory(reqBody);
        res.status(200).json({
            success : true,
            message : "category create successfully..!",
            data : { category },
        });
    } catch(error){
        res.status(400).json({ success : false , message : error.message});
    }
};

const categoryList = async (req , res ) => {
    try{
        const{ search , ...options } = req.query;
        let filter = {};
        const categoryList = await categoryService.getCategoryList(filter , options);
        res.status(200).json({
            success : true,
            message : "category list dispatch successfully..!",
            data : categoryList
        });
    } catch(error){
        res.status(400).json({ success : false , message : error.message});
    }
}

module.exports = {
    createCategory,
    categoryList
}