const express = require('express');
const bodyParser = require('body-parser');

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

const app = express();
const port = process.env.PORT || 8000;

const users = require('./routes/userRoute');

app.use('/users', users);

app.listen(port, err => {
  if(err) {
    logger.error(err.message);
  } else {
    logger.info('App listening on port 8000!');
  }
});

module.exports = app;