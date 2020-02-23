const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const error = require('../api/middlewares/error');

const route = require('../api/routes/v1');

const app = express();
app.use(function(req, res, next) {
  console.log('Request IP: ' + req.url);
  console.log('Request date: ' + new Date());
  next(); // 新的这行很重要
});

app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', route);
app.use(error.notFound);

module.exports = app;
