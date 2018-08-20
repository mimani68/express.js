
var apiDocs = function(app, config){

  var swaggerUi = require('swagger-ui-express'),
      YAML = require('yamljs'),
      swaggerDocumentYaml = YAML.load('./server/api_docs/v2.api.yaml'),
      swaggerOptions = {
        // swaggerUrl: 'http://petstore.swagger.io/v2/swagger.json'
    };

app.use( config.api.shoutUrl , swaggerUi.serve, swaggerUi.setup(swaggerDocumentYaml, swaggerOptions));

}

module.exports = apiDocs;
