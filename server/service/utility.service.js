/**
 * 
 *
  *
 * 
 * @version {1.0.0} - 2017/09/07 18:15
 * @version {1.0.1} - 2017/09/12 11:00
 * 
 * 
 */

// ===| 01 |=====| Main Requirment |=============================
var express     = require('express');
var router      = express.Router();
var path        = require('path');
const chalk     = require('chalk');
var moment      = require('moment-jalaali');


// router.use('/user',require('./user'));
// router.use('/protected', verifyToken, require('./protected'));




// ===| 02 |=====| MiddleWares |=================================
/**
 * 01
 * Token verification
 * @requires
 */
// let verifyToken = require('../middle-wares/verifyToken');




// ===| 03 |=====| Configurations |==============================





// ===| 04 |=====| Business |===================================
// ===| main single page application |==========================
/**
 * 
 * 01
 * @description : main page router
 * 
 */
// router.get('/', (req, res) => {
//     console.log(chalk.blue('index.html') + ' running');
// });
module.exports.utility = {
    title: 'sample project'
}



/**
 * 
 * 02
 * 
 * @description : 'moment jalali' date
 * 
 */
module.exports.date = {

    today: function () {
        return moment().format('jYYYY/jM/jD');
    },

    time: function (param) {
        var date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

};



/**
 * 
 * 03
 * 
 * @description : test
 * 
 */
var sample = {
    title: 'yahoo'
}
module.exports.sample = sample;

