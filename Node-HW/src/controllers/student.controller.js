const { studentService } = require("../services");

// create a student
const createStudent = async ( req , res ) => {
    try {
        const reqbody = req.body;
        const StudentExist = await studentService.createStudent(reqbody);
        if(StudentExist){
            throw new Error("This student already created..!");
        }
        const student = await studentService.createStudent(reqbody);
        if (!student){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success : true,
            message : "Student Create Successfully..!",
            data : student
        });
    }
    catch(error){
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};


//  list of student
const getStudentList = async ( req , res ) => {
    try{
        const StudentList = await studentService.getStudentList();
        if(!StudentList){
            throw new Error("Student list not found..!");
        }
        res.status(200).json({
            success : true,
            message : "Student list show successfully..!",
            data : StudentList
        });
    }
    catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};


// delete student
const deleteStudent = async( req , res ) => {
    try {
        const StudentId = req.params.deleteId;
        const StudentExist = await studentService.deleteStudent();
        if(!StudentExist){
            throw new Error("Student not found..!");
        }
        await studentService.deleteStudent(StudentId);
        res.status(200).json({
            success : true,
            message : "Student delete successfully..!",
        });
    }
    catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
}

module.exports = {
    createStudent,
    getStudentList,
    deleteStudent
}

