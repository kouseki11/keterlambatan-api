const router = require('express').Router()
const userRouter = require('./admin/userRouter')
const rayonRouter = require('./admin/rayonRouter')
const rombelRouter = require('./admin/rombelRouter')
const studentRouter = require('./admin/studentRouter')
const lateRouter = require('./admin/lateRouter')

router.use('/api/user', userRouter)// users router endpoint

router.use('/api/rayon', rayonRouter)// rayonss router endpoint
router.use('/api/rombel', rombelRouter)// rombeblss router endpoint

router.use('/api/student', studentRouter)// students router endpoint
router.use('/api/late', lateRouter)// students router endpoint

module.exports = router