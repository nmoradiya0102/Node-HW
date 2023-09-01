const express = require("express");
const validate = require ("../middlewares/validate");
const { studentValidation } = require("../validations");
const { studentController } = require("../controllers");

const router = express.Router();

// Create student
router.post(
    "/create-student",
    validate(studentValidation.createStudent),
    studentController.createStudent
)

//  get student list
router.get(
    "/list",
    studentController.getStudentList
)

// delete student
router.delete(
    "/delete-student/:deleteId",
    studentController.deleteStudent
)

module.exports = router;