/**
 * 
 *
  *
 * 
 * @version {1.0.0} -  2018/01/23 10:40
 * 
 * 
 */

'use strict';

var auth = require('../service/authentication.service'),
    index = require('../controllers/index.controller'),
    indexRotes = require('./index.routes'),
    express = require('express'),
    router = express.Router();

router.get('/:id', (req, res, next)=>index.hello(req, res, next) )
        .post('/:id', (req, res, next)=>index.erase(req, res, next) );

module.exports = router;