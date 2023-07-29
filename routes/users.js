const express = require('express');
const router  = express.Router();
const {signUp,login} = require('../controllers/users')

router.route('/users/login').post(login)
router.route('/users/signup').post(signUp);

module.exports = router;