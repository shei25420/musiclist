const express = require('express');
const authenticationController = require('../../controllers/authenticationController');

const router = express.Router();

router.route('/register')
      .post(authenticationController.register)
router.route('/login')
      .post(authenticationController.login)

router.route('/logout')
      .get(authenticationController.logout)

module.exports = router;
