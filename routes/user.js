const express = require('express');
const {userLogin, userRegister }  = require('../controllers/user.controller');
const checkExistingUser = require('../middlware/user.middlware');
const router = express.Router();


router.post('/user', checkExistingUser, userRegister);
router.post('/userlog', userLogin);

module.exports = router;
