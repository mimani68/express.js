
module.exports = function(app) {

    const { EventEmitter } = require('events');
    const profiles = new EventEmitter();
    
    profiles.on('route', ({ req, elapsedMS }) => {
        console.log(req.method, req.url, `${elapsedMS}ms`);
    });

    app.use( (req, res, next) => {
        const start = Date.now();
        res.on('finish', () => {
            profiles.emit('route', { req, elapsedMS: Date.now() - start });
        });
      next();
    });


}