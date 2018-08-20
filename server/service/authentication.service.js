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
 * @version {1.0.2} - 2017/09/13 12:05
 * 
 * 
 */



// ===| 01 |=====| Main Requirment |=============================
var bodyParser  = require('body-parser');
const chalk     = require('chalk');
var jwt         = require('jsonwebtoken');



// ===| 02 |=====| Configurations |==============================
/**
 * 
 * @description SERVER configuration
 * 
 */
var config = require('../config/server.config');



/**
 * 
 * JSON Web Token
 * 
 * @param {string} secret
 * 
 */
var jwt_secret = config.JWT_KEY;





// ===| 04 |=====| Business |==============================
/**
 * 
 * 'USER' sample mock data
 * 
 */
var user = {
    name: 'mahdi',
    username: 'mimani',
    role: 'vip',
    password: 1234
}


/**
 *  
 *  01
 *  SIGN IN
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.sign = function (req, res, next) {

    var token = jwt.sign(user, jwt_secret,{
        expiresIn: 4000
    });

    console.log(chalk.red(' √ ') + chalk.blue('authentication.controller') + ' is running');
    
    res.json({
        success: true,
        token: token
    });
}



/**
 * 
 *  02
 *  'VERIFICATION' and 'SECURE ROUTE'
 * 
 */
module.exports.access = {


    this_page_access: false,


    useMethodSecureRout: function(req,res,next, group){
        this.this_page_access = false;
        this.verification(req,res,next);
        this.accessPolicy(req,res, group);
        if ( this.this_page_access == true ){
            next();
        } else {
            res.json({
                status: false,
                error: 403,
                title: "unauthorized access",
                description: " you don't have permission for access this page "
            });
        }
    },


    getMethodSecureRout: function(req,res,next, group){
        this.this_page_access = false;
        this.verification(req,res,next)
        this.accessPolicy(req,res, group);
        next();
    },


    accessPolicy: function(req, res, group){

        for (let index = 0; index < group.length; index++) {
            if( typeof req.token.role != 'undefined' && req.token.role == group[index] ) {
                this.this_page_access = true;
            }
        }

    },


    verification: function(req,res,next) {
        
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
        if (token) {
            jwt.verify(token, jwt_secret, function(err, decoded) {
                if (err) {
                    console.log(chalk.bgRed('  error  ') + ' user has not valid token ');
                    return res.json({
                        status: false,
                        message: ' you have token but it is net valid ',
                        invalid_token: token
                    });
                }
                console.log(chalk.bgGreen(' user authenticated ') + ' user has valid token ');
                req.token = decoded;
            });
        } else {
    
            console.log(chalk.bgRed('  error  ') + ' user has not valid token ');
            return res.status(403).send({
                status: false,
                error_code: 403,
                message: " you don't have token "
            });
        }
    }

}
