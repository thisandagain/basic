## basic
#### [HTTP Basic Auth](http://www.ietf.org/rfc/rfc2617.txt) for Node.js

### Installation
```bash
npm install basic
```

### Basic Use
```javascript
var basic   = require('basic'),
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
```

```bash
curl --head -H "Authorization:Basic bGV0Om1lIGlu" http://localhost:8000
```

### Testing
```bash
npm test
```