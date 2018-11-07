"use strict";

var express = require('express');
var router = express.Router();
//var db = require('../models/connect');
const userController = require('../controllers/userController');

router.get('/all', userController.getAllUsers);

module.exports = router;
