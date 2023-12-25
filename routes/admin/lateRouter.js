const router = require('express').Router()
const { createLate, getAllLate, getAttachmentImages } = require('../../controllers/admin/lateController')
const upload = require("../../utils/uploadImages");

router.get('/', getAllLate)
router.post('/create', upload.array("bukti", 3), createLate)
router.get('/images/:filename', getAttachmentImages )

module.exports = router