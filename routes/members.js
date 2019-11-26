var express = require('express');
var memberController  = require('../controllers/memberController');

var router = express.Router();

router.get('/getall',memberController.getMember);

router.post('/add',memberController.addMember);

router.get('/edit/:id',memberController.editMember);

router.post('/update',memberController.updateMember);

router.get('/delete/:id',memberController.deleteMember);

module.exports = router;