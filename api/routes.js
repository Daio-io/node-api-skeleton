var main = require('./handlers/main.js');
var errors = require('./handlers/errors.js');

module.exports = function (app, rest) {

    //** Routes **//
    rest.get('/sample/:id', main.getSample);
    rest.post('/sample', main.postSample);
    rest.del('/sample/:id', main.deleteSample);

    app.use(errors.error500);
    app.use(errors.error404);

};