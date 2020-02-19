const express = require('express');
const bodyParser = require('body-parser');
const route = require('../api/routes/v1');

const app = express();
app.use(bodyParser.json());

app.use('/v1', route);

module.exports = app;
