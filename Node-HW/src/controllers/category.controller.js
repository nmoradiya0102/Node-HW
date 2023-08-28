const { categoryService } = require("../services");

/** Create category */
const createCategory = async (req , res) => {
    try{
        const reqBody = req.body;

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

/** Category list */
const categoryList = async (_req, res) => {
  try {
    const getCategory = await categoryService.getCategoryList();
    const getUsers = await userService.getUserList();
    res.status(200).json({
      success: true,
      message: "Category List!",
      data: {
        getCategory,
        getUsers,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Delete Category */
const deleteRecord = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const cateExists = await categoryService.getCategoryById(categoryId);
      if (!cateExists) {
        throw new Error("Category not found!");
      }

      await categoryService.deleteCategory(categoryId);

      res.status(200).json({
        success: true,
        message: "Category delete successfully!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

/** Update Category */
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
      message: "Category details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/** Get Category details by id */
const getCategoryDetails = async (req, res) => {
  try {
    const getDetails = await categoryService.getCategoryById(
      req.params.categoryId
    );
    if (!getDetails) {
      throw new Error("Category not found!");
    }

    res.status(200).json({
      success: true,
      message: "Category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    createCategory,
    categoryList,
    deleteRecord,
    updateCategory,
    getCategoryDetails,
}