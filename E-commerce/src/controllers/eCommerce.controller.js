const { user_Service, category_Service, product_Service } = require("../services");

const get_all_list = async(req,res) => {
    try {
        const userlist = await user_Service.get_user_list();
        if(!userlist){
          throw new Error("No user data found -!- ");
        }
        const categorylist = await category_Service.get_category_list();
        if(!categorylist){
          throw new Error("No Category data not found -!- ");
        }
        const productlist = await product_Service.get_product_list();
        if(!productlist){
          throw new Error("No Product data not found -!- ");
        }
        res.status(200).json({
            success:true,
            message:"All data dispatch successfully ^-^ ",
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
    get_all_list
}






// const Category = require('../models/categorymodel');
// const Product = require('../models/productmodel');
// const User = require('../models/usermodel');

// const eCommerceController = {
//   async showCategories(req, res) {
//     try {
//       const categories = await Category.find();
//       res.json(categories);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching categories.' });
//     }
//   },

//   async showProducts(req, res) {
//     try {
//       const products = await Product.find();
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching products.' });
//     }
//   },

//   async createUser(req, res) {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       // Create user with validated data
//       const { name, email, password } = req.body;
//       // Implement user creation logic using your User model

//       res.json({ message: 'User registered successfully.' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error registering user.' });
//     }
//   },


// async createCategory(req, res) {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const { name } = req.body;
//       const category = new Category({ name });
//       await category.save();

//       res.json({ message: 'Category created successfully.' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error creating category.' });
//     }
//   },

//   async createProduct(req, res) {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const { name } = req.body;
//       const product = new Product({ name });
//       await product.save();

//       res.json({ message: 'Product created successfully.' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error creating product.' });
//     }
//   }
// };

// module.exports = eCommerceController;



