const express = require('express');

const logger = require('./lib/logger');

const app = express();
const port = process.env.PORT || 8000;

const users = require('./routes/userRoute');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', users);

app.listen(port, err => {
  if(err) {
    logger.error(err.message);
  } else {
    logger.info('App listening on port 8000!');
  }
});

module.exports = app;