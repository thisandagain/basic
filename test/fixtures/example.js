var basic   = require('../../lib/index'),
    http    = require('http');


var auth    = basic(function (user, pass, callback) {
    if (user === 'let' && pass === 'me in') return callback(null);
    callback(401);
});

http.createServer(function (req, res) {
    auth(req, res, function (err) {
        if (err) {
            res.writeHead(err);
            res.end();
        }

        res.writeHead(200);
        res.end();
    });
}).listen(8000);