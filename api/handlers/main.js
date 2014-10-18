// Handlers files are used to group your routes logically
// Require your handlers and add each route to the routes.js file

var Sample = require('../../models/sample.js');

exports.getSample = function (req, content, callback) {
    Sample.findById(req.params.id, function (err, found) {
        if (err) return callback({
            error: 'Could not find sample'
        });
        callback(null, {

                name: found.name,
                digits: found.digits,
                tags: found.tags,
                boo: found.boo
            }

        )

    });
};

exports.postSample = function (req, content, callback) {
    var sample = new Sample({
        name: req.body.name,
        digits: req.body.digits,
        tags: req.body.tags,
        boo: req.body.boo

    });

    sample.save(function (err, saved) {
        if (err) return callback({
            error: 'Failed saving sample'
        });
        callback(null, {
            id: saved._id
        });
    });
};