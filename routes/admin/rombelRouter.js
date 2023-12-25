const router = require('express').Router()
const { getAllRombel, createRombel, getRombelById, updateRombel, deleteRombel } = require('../../controllers/admin/rombelController')

router.get('/', getAllRombel)
router.post('/create', createRombel)
router.post('/update/:rombel_id', updateRombel)
router.post('/delete/:rombel_id', deleteRombel)
router.get('/:rombel_id', getRombelById)

module.exports = router