/**
 * 
 *
  *
 * 
 * @description : car diagnostic system
 * @link        : http://sample.ir
 * @author      { Mahdi Imani }
 * @email       : imani.mahdi[a]gmail.com
 * @copyright   'xxx Co., Ltd.'
 * 
 * 
 * @version {1.0.0} - 2017/09/07 18:15
 * @version {1.0.1} - 2017/09/11 22:16
 * @version {1.0.2} - 2017/09/16 11:45
 * @version {1.0.3} -  2018/01/26 11:30
 * 
 * 
 */



// ===| 01 |=====| Main Requirment |=============================
const express     = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var session       = require('express-session');
var jwt           = require('jsonwebtoken');
var helmet        = require('helmet');
var csurf         = require('csurf');
var path          = require('path');

var speedProfiler = require('./service/responce_time.profiler');





// ===| 02 |=====| Configurations |==============================
/**
 * 
 * 01
 * @description SERVER configuration
 * 
 * @param {string} port     eg: 3000
 * @param {string} access   : true, false
 * 
 */
var config = require('./config/server.config');
var port = config.port;



/**
 * 
 * 02
 * @description Session configuration
 * 
 * @param {string} secret
 * @param {boolean} resave
 * @param {boolean} saveUninitialized
 * @param {object} cookie
 * 
 */
app.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))



/**
 * 
 * 03
 * @description JSON Web Token
 * 
 * @param {string} secret
 * 
 */
var jwt_secret = config.authentication.jwt.secret;



/**
 * 
 * 04
 * @description parse all 'req.body' to JSON format
 * 
 * @example - req.body.name => 'mahdi'
 * @example - req.body._id  => 'e88h3ufkfjuye04x3'
 * 
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/**
 * 
 * 05
 * @description Helmet
 * @description secure apps by setting various HTTP headers
 * 
 * @link https://github.com/helmetjs/helmet
 * 
 */
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.frameguard());


/**
 * 
 * 06
 * @description Server Response timer in console.log
 * 
 */
speedProfiler(app);


/**
 * 
 * 07
 * @description Cross Site Request Forgery (CSRF) protection
 * @description show valid token for FORM submit 'req.csrfToken()'
 * 
 * @link https://en.wikipedia.org/wiki/Cross-site_request_forgery
 * @link https://expressjs.com/en/resources/middleware/csurf.html
 * 
 * 
 */
// var csrfProtection = csrf({ cookie: true })


/**
 * 
 * 08
 * @description  API documentation
 * 
 * 
 */
var api_doc = require('./api_docs/api_doc');
api_doc(app, config);


/**
 * 
 * 09
 * set '/public' as main static folder
 * 
 */
app.use(express.static(process.cwd() + '/public'));




// ===| 03 |=====| Modules and MiddleWares |=================================
/**
 * 
 * @description systemic utility
 * 
 */
var utility = require('./service/utility.service'),
    lunchLogger = require('./service/lunch.logger');





    
// ===| 04 |=====| Business Layer |===================================

/**
 * 
 * loading project logger
 * 
 */
lunchLogger.starter(utility);


/***************************************************
 * 
 * main single page application
 * 
 **************************************************/
app.get('/', (req, res, next)=>{
    res.sendFile( config.cwd_server + '/public/index.html');
});



/***************************************************
 * 
 * API CENTER
 *  routing all page in 'index.routes.js'
 * 
 **************************************************/
app.use('/api/v1', require('./routes/index.routes') );




/**
 * 
 * Runing server
 * @param {number} - port:  show port number
 * 
 */
// app.listen(port, () => {
//     lunchLogger.loadServer(utility);
// });

module.exports = app;