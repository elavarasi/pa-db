"use strict";
const dbconfig = require('../config/dbconfig.json');
const mongoose = require('mongoose');

const logger = require('./logger');

// pa-db url
const url = `${dbconfig.db}://${dbconfig.username}:${dbconfig.password}@${dbconfig.host}/pa-db`;
logger.info(`pa-db host url ` + url);
/**
 * Connect to the DB
 * @return {Promise} Resolves to MogoClient
 */
const opendbConnection = function() {
  mongoose.Promise = global.Promise;
  logger.info("Open pa-db connection");
  return mongoose.connect(url, { useNewUrlParser: true });
};

// close connection to DB pa-db
const closedbConnection = function(client) {
  logger.info("Closing pa-db connection");
  return mongoose.connection.close()
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

module.exports = {opendbConnection, closedbConnection};
