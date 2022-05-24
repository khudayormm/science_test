const { Router } = require('express');

const router = Router()

router.get('/', require('../controllers/render/home'))
router.get('/testlar', require('../controllers/render/tests'))

module.exports = router