const { Router } = require('express')

const router = Router()

router.get('/', require('../controllers/render/home'))
router.get('/login', require('../controllers/render/login'))
router.get('/register', require('../controllers/render/register'))


router.get('/math', require('../controllers/profile/get/mathtest'))

router.get('/score', require('../controllers/profile/get/score'))

router.post('/math', require('../controllers/profile/post/math'))

module.exports = router;