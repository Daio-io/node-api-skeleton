var assert = require('chai').assert;
var http = require('http');
var rest = require('restler');
var inserted = {}
require('../index.js');

suite('API tests', function () {

    var baseUrl = 'http://localhost:3000';

    // Basic sample object to use for post and testing get data assertions
    var sample = {
        name: 'Test',
        digits: 25,
        tags: ['test', 'testing', 'tested'],
        boo: true
    };

    setup(function () {

    });

    test('should be able to send and add a sample to the API', function (done) {
        postMessage(sample).on('success',
            function (data) {
                inserted.sample = data.id;
                rest.get(baseUrl + '/api/sample/' + data.id).on('success', function (response) {
                    assert(response.name === sample.name);
                    assert(response.digits === sample.digits);
                    assert(response.tags.size === sample.tags.size);
                    assert(response.boo === sample.boo);
                    done();
                });
            });
    });

    test('I should be able to get all samples from the API', function (done) {
        postMessage(sample);
        postMessage(sample);
        postMessage(sample).on('success', function (data) {
            rest.get(baseUrl + '/api/samples').on('success', function (response) {
                assert(response.length >= 3);
                done();
            });
        });

    });


    test('I should be able to get sample from API', function (done) {
        postMessage(sample).on('success',
            function (response) {
                inserted.sample = response.id;
                assert.match(response.id, /\w/, 'id must be set');
                done();

            });
    });

    test('I should be able to delete from the API', function (done) {
        postMessage(sample).on('success',
            function (data) {
                inserted.sample = data.id;
                deleteSample(data.id).on('success', function (response) {
                    assert(response.deleted === 1);
                    done();
                })
            });
    });

    teardown(function () {
        
    });

    function postMessage(postData) {
        return rest.post(baseUrl + '/api/sample', {
            data: postData
        })
    };

    function deleteSample(id) {
        return rest.del(baseUrl + '/api/sample/' + id);
    };


});