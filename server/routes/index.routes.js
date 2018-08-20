/**
 * 
 *
  *
 * 
 * @version {1.0.0} -  2018/12/18 09:00 AM
 * @version {1.0.1} -  2018/01/23 10:40 PM
 * 
 * 
 */

'use strict';

var auth = require('../service/authentication.service'),
    index = require('../controllers/index.controller'),
    indexRotes = require('./index.routes'),
    express = require('express'),
    router = express.Router();
    

router.get('/connect/sign-in-request')
        .post(auth.sign);


router.get('/main', (req, res, next)=>{ auth(req, res, next); index.main(req, res, next); })
        .post('/main', (req, res, next)=>{ auth(req, res, next); index.main(req, res, next); } );


router.get('/version', (req, res, next)=>{ auth(req, res, next); index.version(req, res, next); });


router.get('/update', (req, res, next)=>{ auth(req, res, next); index.update(req, res, next); });


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 
// Account :: Nested routing
// 
// +++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/account', require('./account.routes'));


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 
// USER :: Nested routing
// 
// +++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/user', require('./user.routes'));


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 
// CLIENT :: Nested routing
// 
// +++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/clinet', require('./client.routes'));


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 
// Wallet :: Nested routing
// 
// +++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/wallet', require('./wallet.routes'));


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 
// ECU :: Nested routing
// 
// +++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/ecu', require('./ecu.routes'));


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 
// Vehicle :: Nested routing
// 
// +++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/vehicle', require('./vehicle.routes'));



module.exports = router;