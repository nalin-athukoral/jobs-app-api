const express = require('express');
const {userLogin, userRegister, getAllUsers }  = require('../controllers/user.controller');
const checkExistingUser = require('../middlware/user.middlware');
const router = express.Router();


router.post('/user', checkExistingUser, userRegister);
router.post('/userlog', userLogin);
router.get('/alluser', getAllUsers);

module.exports = router;
