const express = require('express');
const router = express.Router();
const config = require('./config');

console.log('config Test: ' + config);

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;