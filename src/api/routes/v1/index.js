const express = require('express');
const testRouter = require('./test');
const bookRouter = require('./book');

const router = express.Router();
console.log(123456);
router.get('/', function(req, res, next) {
  res.json({
    hello: 'world',
  });
});
router.use('/test', testRouter);
router.use('/book', bookRouter);
module.exports = router;
