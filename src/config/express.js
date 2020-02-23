const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const route = require('../api/routes/v1');

const app = express();
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', route);

module.exports = app;
