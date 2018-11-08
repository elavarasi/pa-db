"use strict";
const {userModel} = require('../models/userModel');
const {opendbConnection, closedbConnection} = require('../lib/dbConnect');
const logger = require('../lib/logger');

/**
 * getAllUsers fetches all the users in the User Collection
 */
const getAllUsers = function(req, res) {
  const mongoClient = opendbConnection();
  mongoClient
    .then(mongoclient => {
      userModel.find({}).exec(function(err, user) {
        if(err) {
          logger.info(err);
          res.send(err);
        }
        logger.info(user);
        res.json(user);
        closedbConnection()
      });
    })
    .catch(err => {
      logger.info(err);
      res.status(500).send(err);
    })
};


/**
 * filterUsers fetches all the users matching the input query filters
 */
const filterUsers = function(req, res) {
  const mongoClient = opendbConnection();
  mongoClient
    .then(mongoclient => {
      userModel.find(req.query).exec(function(err, user) {
        if(err) {
          res.send(err);
        }
        logger.info(user);
        res.json(user);
        closedbConnection()
      });
    })
    .catch(err => {
      logger.info(err);
      res.status(500).send(err);
    })
};

/**
 * createUser adds a new user to the pa-db Users collection
 */
const createUser = function(req, res) {
  const mongoClient = opendbConnection();
  mongoClient
    .then(mongoclient => {
      const newuser = new userModel(req.body);
      newuser.save(function(err, response) {
        if(err) {
          res.send(err);
        }
        logger.info(response);
        res.json(response);
        closedbConnection()
      });
    })
    .catch(err => {
      logger.info(err);
      res.status(500).send(err);
    })
};


module.exports = {getAllUsers, filterUsers, createUser};
