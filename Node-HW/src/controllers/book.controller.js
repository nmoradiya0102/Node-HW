//*  Create Book services */
const {bookService} = require("../services");

const create_book_controller = async(req,res) => {
    try{
        const reqBody = req.body;
        const book = await bookService.createBook(reqBody);
        console.log(book);
        res.status(200).json({
            success : true,
            message : "Book create Successfully..!",
            data : book ,
        });
    } catch(error) {
        res.status(400).json({success : false , message : error.message});
    }
};

//* get book  */
const get_book_Controller = async(req , res) =>{
    try{
        const{ search, ...options} = req.query;
        let filter = {};
        const categorylist = await bookService.getbooklist(filter,options);
        res.status(200).json({
            success : true,
            message : "Category list dispatch successfully..!",
            data : categorylist
        });
    } catch (error){
        res.status(400).json({success : false , message : error.message});
    }
};

module.exports = {
    create_book_controller,
    get_book_Controller
}