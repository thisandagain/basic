var basic   = require('../../lib/index'),
    http    = require('http');


var auth    = basic(function (user, pass, callback) {
    if (user === 'let' && pass === 'me in') return callback(null);
    callback(401);
});

http.createServer(function (req, res) {
    auth(req, res, function (err) {
        res.writeHead(err || 200);
        res.end();
    });
}).listen(8000);