var test    = require('tap').test,
    bux     = require('codebux');

bux(__dirname + '/../../lib/index.js', function (err, debt) {
    test('governance', function (t) {
        t.equal(err, null, 'error object should be null');
        t.type(debt, 'number', 'result should be a number');
        t.ok(debt > 50, 'result should be greater than 50');
        t.end();
    });
});