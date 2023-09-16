//*  Create Book services */
const {bookService} = require("../services");

const create_Book = async(req,res) => {
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

//* get book list */
const get_Book_List = async(req , res) =>{
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

/**book update by id */
const update_Book = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const bookExists = await bookService.getBookById(bookId);
        if (!bookExists) {
            throw new Error("Book not found...");
        }
        await bookService.updateDetails(bookId, req.body);
        res.status(200).json({
            success: true,
            message: "Book details update successfully..!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error, message });
    }
};

/** Delete book */
const delete_Book = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const bookExists = await bookService.getBookById(bookId);
        if (!bookExists) {
            throw new Error("Book not found!");
        }

        await bookService.deleteBook(bookId);
        res.status(200).json({
            success: true,
            message: "Book delete successfully..!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    create_Book,
    get_Book_List,
    update_Book,
    delete_Book
}