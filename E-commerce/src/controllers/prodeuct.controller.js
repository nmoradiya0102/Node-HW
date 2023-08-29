const { productService } = require("../services");

/* create product */
const createproduct = async(req,res) => {
    try {
        const reqbody = req.body;
        const productexist = await productService.getproductbyname(reqbody.productname);
        if(productexist){
            throw new Error("Product by this name already exist");
        }
        const product = await productService.createproduct(reqbody);
        if(!product){
            throw new Error("Something went wrong");
        }
        res.status(200).json({
            success:true,
            message:"Product creat successfully",
            data: reqbody
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

/* product list*/
const getproductlist = async (req, res) => {
    try {
      const productlist = await productService.getproductlist();
      if(!productlist){
        throw new Error("Product data not found");
      }
      res.status(200).json({
        success: true,
        message: "Get Product list successfully",
        data: productlist,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* delete product */
const deleteproduct = async(req,res) => {
    try {
      const productid = req.params.productId;
      const productexist = await productService.getproductbyid(productid);
      if(!productexist){
        throw new Error("Product not found");
      }
      await productService.deleteproduct(productid);
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
}

module.exports = {
    createproduct,
    getproductlist,
    deleteproduct
}