const express = require('express');
const testRouter = require('./test');
const fileRouter = require('./file');

const router = express.Router();
// router.get('/', function(req, res, next) {
//   res.json({
//     hello: 'express',
//   });
// });
console.log(123456);
router.get('/', function(req,res,next){
  res.json({
    "hello": "world"
  })
})
router.use('/test', testRouter);
router.use('/file', fileRouter);
module.exports = router;
