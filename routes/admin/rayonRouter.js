const router = require('express').Router()
const { getAllRayon, createRayon, getRayonById, updateRayon, deleteRayon } = require('../../controllers/admin/rayonController')

router.get('/', getAllRayon)
router.post('/create', createRayon)
router.post('/update/:rayon_id', updateRayon)
router.post('/delete/:rayon_id', deleteRayon)
router.get('/:rayon_id', getRayonById)

module.exports = router