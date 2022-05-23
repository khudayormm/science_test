const { Router } = require('express')

const router = Router()

const upload = require('../middleware/upload-image')



router.get('/', require('../controllers/admin/render/home'))
router.get('/login', require('../controllers/admin/render/login'))
router.get('/register', require('../controllers/admin/render/register'))
router.get('/question', require('../controllers/admin/render/question'))



router.post('/question', upload.single('myFfile'), require('../controllers/admin/post/question'))


module.exports = router