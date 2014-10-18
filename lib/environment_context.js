module.exports = function (app) {
    // creating a switch to add environment specifics such as different logging in this case
    switch (app.get('env')) {
    case 'development':
        //compact colorful dev logging
        app.use(require('morgan')('dev'));
        break;
    case 'production':
        //module express-logger supo=ports daily rotations
        app.use(require('express-logger')({
            path: __dirname + '/log/requests.log'
        }));
        break;
    }

};