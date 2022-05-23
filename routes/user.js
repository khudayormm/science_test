const { Router } = require('express')

const router = Router()

router.get('/', require('../controllers/render/home'))
router.get('/login', require('../controllers/render/login'))
router.get('/register', require('../controllers/render/register'))

router.get('/do', require('../controllers/profile/get/work'))
router.get('/score', require('../controllers/profile/get/score'))


module.exports = router;