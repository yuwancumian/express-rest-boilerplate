const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  console.log('tested');
  res.json({
    hello: 'test',
  });
});
module.exports = router;
