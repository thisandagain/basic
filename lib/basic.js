/**
 * HTTP basic authentication parser.
 *
 * @package basic 
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */

/**
 * Export
 */
module.exports = function (input) {
    var token   = input.split(/\s+/).pop() || '';
    var auth    = new Buffer(token, 'base64').toString();
    var parts   = auth.split(/:/);

    return {
        username: parts[0],
        password: parts[1]
    };
};