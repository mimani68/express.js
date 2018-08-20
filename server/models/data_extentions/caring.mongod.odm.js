/**
 *
 * @version {1.0.0} - 2017/09/07 18:15
 * @version {1.0.1} - 2017/09/12 23:00
 *
 */

// ===| 01 |=====| Main Requirment |=============================
// core
const express       = require('express');
var bodyParser      = require('body-parser');
const router        = express.Router();

// third-party library
const chalk         = require('chalk');
var _               = require('lodash');

// database
var MongoClient     = require('mongodb').MongoClient;




// ===| 02 |=====| Configurations |==============================
/**
 *
 * @description SERVER configuration
 *
 */
var config       = require('../../config/server.config');
var database_url = config.setConfig.database_url();




/********************************************************************
 *                                                                  *
 *                                                                  *
 *                    database CRUD operation                       *
 *                                                                  *
 *                                                                  *
 ********************************************************************/
module.exports.CRUD = {

    insert: function (collection, variable_for_store, myobj ) {
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(database_url, function (err, db) {
            if (err) throw err;
            db.collection(collection).insertOne(myobj, function (err, res) {
                if (err) throw err;
                variable_for_store.push(result);
                console.log("1 document inserted");
                db.close();
            });
        });
    },


    find: function (collection, variable_for_store, next){
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(database_url, function (err, db) {
            if (err) throw err;
            db.collection(collection).findOne({}, function (err, result) {
                if (err) throw err;
                // console.log('find document: >', result);
                variable_for_store.push(result);
                db.close();
                next();
            });
        });
    },


    showAllDoc: function (collection, variable_for_store, next){

        var MongoClient = require('mongodb').MongoClient;

        MongoClient.connect(database_url, function (err, db) {
            if (err) throw err;
            db.collection(collection).find({}).toArray(function (err, result) {
                if (err) throw err;
                variable_for_store.push(result);
                db.close();
                next();
            });
        });

    },


    query: function (collection, variable_for_store, queryObject, next) {
        var MongoClient = require('mongodb').MongoClient;
        var queryObject = queryObject || { address: "Park Lane 38" };
        MongoClient.connect(database_url, function (err, db) {
            if (err) throw err;
            db.collection(collection).find(queryObject).toArray(function (err, result) {
                if (err) throw err;
                variable_for_store.push(result);
                db.close();
                next();
            });
        });
    },


    /**
     *
     *
     * show result with join two table
     *
     * @function .aggregate()
     * @param $lookup
     *
     */
    aggregate: function (collection, variable_for_store, lookup, next) {
        var MongoClient = require('mongodb').MongoClient;
        var lookup = lookup || {
            $lookup:
                {
                    from: 'ecu_detail',
                    localField: 'ecu_id',
                    foreignField: '_id',
                    as: 'ecu_detail'
                }
            };
        MongoClient.connect(database_url, function (err, db) {
            if (err) throw err;
            db.collection(collection).aggregate([lookup], function (err, res) {
                if (err) throw err;
                variable_for_store.push(res);
                db.close();
                next();
            });
        });
    }

}

