// Dependencies
var Cheerio = require("cheerio")
  , Request = require("request")
  ;


/**
 * GhCal
 * Fetches the GitHub contributions calendar, converting
 * it into ASCII art.
 *
 * @name GhCal
 * @function
 * @param {String} username The username.
 * @return {undefined}
 */
var GhCal = module.exports = function (username, callback) {
    var url = "http://github.com/users/" + username + "/contributions";
    Request(url, function (err, res, body) {
        if (err) { return callback(err); }

        debugger
    });
};
