const router = require('express').Router()
const ctrls = require('../controllers/restaurant')

router.post('/addnew', ctrls.addNewRes)
router.get('/getall', ctrls.getNewRes)
router.get('/get-detail-by-id', ctrls.getById)
router.get('/find-res/:name', ctrls.findByName)

module.exports = router 
