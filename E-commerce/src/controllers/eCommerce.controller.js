const { userService, categoryService, productService } = require("../services");

const getalllist = async(req,res) => {
    try {
        const userlist = await userService.getuserlist();
        if(!userlist){
          throw new Error("user data not found");
        }
        const categorylist = await categoryService.getcategorylist();
        if(!categorylist){
          throw new Error("Category data not found");
        }
        const productlist = await productService.getproductlist();
        if(!productlist){
          throw new Error("Product not found");
        }
        res.status(200).json({
            success:true,
            message:"All data show successfully",
            user_data: userlist,
            category_data: categorylist,
            product_data: productlist,
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

module.exports = {
    getalllist
}


