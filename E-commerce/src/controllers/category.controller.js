const { categoryService } = require("../services");

/* create category */
const createcategory = async (req, res) => {
    try {
      const reqBody = req.body;
      const categoryexist = await categoryService.getcategorybyname(reqBody.categoryname);
      if(categoryexist){
        throw new Error("Category by this name already exist");
      }
      const category = await categoryService.createcategory(reqBody);
      if(!category){
        throw new Error("Something went wrong");
      }
      res.status(200).json({
        success: true,
        message: "Category create successfully",
        data: reqBody,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* category list */
const categorylist = async (req,res) => {
    try {
        const categorylist = await categoryService.getcategorylist();
        if(!categorylist){
          throw new Error("Category list data not found");
        }
        res.status(200).json({
          success: true,
          message: "Category list dispatch successfully",
          data:categorylist
        });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
}

/* category delete */
const deletecategory = async(req,res) => {
  try {
    const categoryid = req.params.categoryId;
    const categoryexist = await categoryService.getcategorybyid(categoryid);
    if(!categoryexist){
      throw new Error("Category not found ");
    }
    await categoryService.deletecategory(categoryid);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

// update category
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const cateExists = await categoryService.getCategoryById(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await categoryService.updateDetails(categoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Category update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
    createcategory,
    categorylist,
    deletecategory,
    updateCategory
}