const { Router } = require('express')

const router = Router()

router.get('/login', require('../controllers/render/login'))
router.get('/register', require('../controllers/render/register'))


router.get('/testlar/math', require('../controllers/profile/get/mathtest'))



router.get('/testlar/score', require('../controllers/profile/get/score'))

router.post('/testlar/math', require('../controllers/profile/post/math'))

module.exports = router;