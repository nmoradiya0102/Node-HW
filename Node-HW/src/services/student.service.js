const { Student } = require("../models");

// create student
const createStudent = async(reqbody) => {
    return Student.create(reqbody);
}

// get student list
const getStudentList = async() => {
    return Student.find();
}

// get Student by id
const getStudentById = async(StudentId) => {
    return Student.findById(StudentId);
}

// delete student
const deleteStudent = async(StudentId) => {
    return Student.findByIdAndDelete(StudentId);
}

module.exports = {
    createStudent,
    getStudentList,
    getStudentById,
    deleteStudent
}
