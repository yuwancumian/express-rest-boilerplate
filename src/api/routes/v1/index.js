const express = require('express');
const testRouter = require('./test');
const fileRouter = require('./file');

const router = express.Router();
console.log(123456);
router.get('/', function(req,res,next){
  res.json({
    "hello": "world"
  })
})
router.use('/test', testRouter);
router.use('/file', fileRouter);
module.exports = router;
