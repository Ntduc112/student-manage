const express = require("express");
const {
    getAllStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
    searchByName,
    searchByAddress
} = require("../controllers/StudentController");

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/searchName").get(searchByName);
router.route("/searchAddress").get(searchByAddress);
router.route("/:id").get(getStudentById).put(updateStudent).delete(deleteStudent);

module.exports = router;