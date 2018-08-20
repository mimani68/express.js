/**
 * 
 *
  *
 * 
 * @version {1.0.0} - 2017/10/10 16:10 PM
 * @version {1.0.1} -  2018/01/23 1:40 AM
 * 
 * 
 */

'use strict';

module.exports = {

    dependency() {
        /**
         * 
         * @description SERVER configuration
         * 
         */
        var config = require('../config/server.config');
        var database = config.database[0];

        /**
         * 
         * @description AUTHENTICATION
         * 
         */
        var auth = require('../service/authentication.service');

        /**
         * 
         * @description access policy object
         * 
         */
        var permission = require('../config/permission.routing');
    },
    
    
    main: function(req, res, next){

        // load dependency
        this.dependency();

        res.json({
            error: false
        });
    },

    showVersion: function(req, res, next){

        // load dependency
        this.dependency();

        res.json({
            delete: true
        });
    },

}