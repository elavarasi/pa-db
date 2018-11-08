"use strict";

var express = require('express');
var router = express.Router();
const {getAllUsers, filterUsers, createUser} = require('../controllers/userController');

router.get('/all', getAllUsers); //Get all users
router.get('/finduser', filterUsers); //Filter user based on query parameters passed.

router.post('/new', createUser);

module.exports = router;
