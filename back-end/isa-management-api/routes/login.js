const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/loginController')
const auth = require('../app/middleware/auth')

/* GET home page. */
router.post('/login', loginController.login);
router.get('/secret', auth.auth, loginController.secret);

module.exports = router;
