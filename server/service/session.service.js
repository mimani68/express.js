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
 * @version {1.0.0} - 2017/09/15 18:15 PM
 * 
 * 
 */

// ===| 02 |=====| Configurations |==============================
/**
 * 
 * @description SERVER configuration
 * 
 */
var config = require('../config/server.config');


// ===| 03 |=====| Business |==============================
var sessionManager = {

    saveToken: function(value) {

        var redis = require("redis"),
            client = redis.createClient();

        client.set(`ses:user:${value.id}`, `${value.token}`, redis.print);
        
    },

    getToken: function(value) {

        var redis = require("redis"),
            client = redis.createClient();

        client.get(`ses:user:${value.id}`,function(err, reply) {
            this.errorInResponce(err);
        });

    },

    errorInResponce: (err, reply)=>{
        console.log(err);
    },

    errorInConnection: function(){

        var redis = require("redis"),
            client = redis.createClient();

        client.on("error", function (err) {
            console.log("Error " + err);
        });
    }

}


module.exports = sessionManager;