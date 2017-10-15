const express = require('express');

const router = express.Router();

const apiController = require('../../controllers/apiController');

router.route('/users/list')
  .get(apiController.getAllUsers);

module.exports = router;
