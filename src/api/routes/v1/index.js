const express = require('express');
const testRouter = require('./test');
const fileRouter = require('./test');

const router = express.Router();
console.log(123456);
router.get('/', function(req, res, next) {
  res.json({
    hello: 'world',
  });
});
router.use('/test', testRouter);
module.exports = router;
