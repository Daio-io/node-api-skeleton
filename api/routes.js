var main = require('./handlers/main.js');
var errors = require('./handlers/errors.js');

module.exports = function (app, rest) {

    //** Routes **//
    rest.get('/sample/:id', main.getSample);
    rest.post('/sample', main.postSample);

    app.use(errors.error500);
    app.use(errors.error404);

};