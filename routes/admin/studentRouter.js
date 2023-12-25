const router = require('express').Router()
const { getAllStudent, createStudent, getStudentById, updateStudent, deleteStudent } = require('../../controllers/admin/studentController')

router.get('/', getAllStudent)
router.post('/create', createStudent)
router.post('/update/:student_id', updateStudent)
router.post('/delete/:student_id', deleteStudent)
router.get('/:student_id', getStudentById)

module.exports = router