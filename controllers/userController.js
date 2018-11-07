"use strict";

const User = require('../models/user.model');
const {getMongoClient, getCollection, closeMongoClient} = require('../lib/dbConnect');

/**
 * The getAllUsers Controller fetches all the users in the User Collection and sets it to the response object
 */
const getAllUsers = function(req, res) {
  const mongoClient = getMongoClient();
  mongoClient
    .then(mongoclient => {
      const collection = getCollection(mongoclient, 'users');
      return {userCollection: collection, mongoClient: mongoclient};
    })
    .then(result => {
      const users = result.userCollection.find().toArray();
      return Promise.all([users,  Promise.resolve(result.mongoClient)]);
    })
    .then(result => {
      closeMongoClient(result[1]);
      res.json(result[0]);
    })
    .catch(err => {
      res.send(err);
    })
};

module.exports = {getAllUsers};
