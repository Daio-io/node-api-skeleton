//**- Middleware --**
module.exports = function (app) {
    var bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({
        extended: true
    })); // bodyParser is used for request (req) object

    app.use(bodyParser.json());

};