"use strict";
let dbconfig = require('../config/dbconfig.json');
const MongoClient = require('mongodb').MongoClient;

// pa-db url
const url = `${dbconfig.db}://${dbconfig.username}:${dbconfig.password}@${dbconfig.host}/pa-db`;

/**
 * Connect to the DB
 * @return {Promise} Resolves to MogoClient
 */
const getMongoClient = function() {
  return MongoClient.connect(url)
};

// close connection to DB pa-db
const closeMongoClient = function(client) {
  console.log("closing the connection");
  return client.close()
};

/**
 * The getCollection fetches the collection from the db.
 * @param  {Object}  mongoClient     The Mongo DB Client
 * @param  {String}  collectionname  The collection name
 * @return {Promise}                 Resolves to collection
 */
const getCollection = function(mongoClient, collectionname) {
  const db = mongoClient.db('pa-db');
  return db.collection(collectionname);
};


module.exports = {getMongoClient, getCollection, closeMongoClient};
