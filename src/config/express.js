const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const error = require('../api/middlewares/error');

const route = require('../api/routes/v1');

const app = express();
app.use(morgan('short'));

app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', route);
app.use(error.notFound);

module.exports = app;
