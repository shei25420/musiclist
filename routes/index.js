const express = require('express');

const router = express.Router();

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    res.render('index', { title: 'Music List Alpha' });
  });


module.exports = router;
