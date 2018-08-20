if( process.env.NODE_ENV === 'production' ){

  require('dotenv').config({ path: './server/.production.env' });
  console.log('production', process.env.MESSAGE);

} else if ( process.env.NODE_ENV === 'development' || !process.env.NODE_ENV ) {

  var e = require('dotenv').config({ path: './server/.development.env' });
  console.log('development', process.env.MESSAGE);

}


var config = {

  version: '1.0.7',

  database: [
    {
      client: process.env.DB_TECHNOLOGY_BRAND,
      connection:{
        database_url: function(){
            return 'mongodb://' + this.database_hostName + ':' + this.database_port + '/' + this.database_name;
        },
        database_name : process.env.DB_NAME,
        database_username : process.env.DB_USER,
        database_port : process.env.DB_PORT,
        database_hostName : process.env.DB_HOST,
        connection_string: process.env.DB_CONNECTION_STRING,
        charset: 'utf8'
      },
      debug: false
    }
  ],

  api: {
    shoutUrl: '/api-docs'
  },

  logger: {
      level: 'info',
      format: 'tiny'
  },

  session: {
    secret: 'eox82bs91@4'
  },

  access: true,

  authentication: {

    jwt: {
      secret : process.env.JWT_KEY
    }

  },

  base_url: process.env.BASE_URL,

  cwd_server: process.cwd() + '/server',

  port: process.env.PORT
};

module.exports = config;