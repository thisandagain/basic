## basic
#### [HTTP Basic Auth](http://www.ietf.org/rfc/rfc2617.txt) for Node.js

[![Build Status](https://travis-ci.org/thisandagain/basic.svg)](https://travis-ci.org/thisandagain/basic)

### Installation
```bash
npm install basic
```

### Basic Use
```javascript
var http = require('http');
var basic = require('../../lib/index');

var auth = basic(function (user, pass, callback) {
    if (user === 'let' && pass === 'me in') return callback(null);
    callback(401);
});

http.createServer(function (req, res) {
    auth(req, res, function (err) {
        var head = (err) ? {'WWW-Authenticate': 'Basic realm="Secure Area"'} : {};
        res.writeHead(err || 200, head);
        res.end();
    });
}).listen(8000);
```

```bash
curl --head -H "Authorization:Basic bGV0Om1lIGlu" http://localhost:8000
```

### Testing
```bash
npm test
```
