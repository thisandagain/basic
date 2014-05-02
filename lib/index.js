/**
 * HTTP Basic Auth for Node.js
 *
 * @package basic
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var basic   = require('./basic');

/**
 * Export
 */
module.exports = function (handler) {
    // Default handler method
    if (typeof handler !== 'function') {
        handler = function (user, pass, callback) {
            callback(null);
        };
    }

    // Return middleware
    return function (req, res, callback) {
        var header = req.headers.Authorization || req.headers.authorization;
        if (!header) {
            var denied = new Error('access denied')
            denied.status = denied.statusCode = 401
            return callback(denied);
        }
        
        var auth = basic(header);
        handler(auth.username, auth.password, callback);
    };
};
