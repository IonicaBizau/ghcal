// Dependencies
var Cheerio = require("cheerio")
  , Request = require("request")
  , Typpy = require("typpy")
  ;

/**
 * GhCal
 * Fetches the GitHub contributions calendar data (in JSON format).
 *
 * @name GhCal
 * @function
 * @param {String|Object} username The username or an object containing:
 *
 *  - `username` (String): The GitHub username.
 *  - `cookie` (String): An optional cookie. Could be useful to get the private calendar stats.
 *
 * @return {Request} The request stream.
 */
var GhCal = module.exports = function (options, callback) {

    if (Typpy(options, String)) {
        options = {
            username: options
        };
    }

    if (!options.username || !Typpy(options.username, String)) {
        return callback(new Error("Invalid username."));
    }

    var url = "http://github.com/users/" + options.username + "/contributions"
      , headers = {}
      ;

    if (options.cookie) {
        headers["Cookie"] = options.cookie;
    }

    return Request({
        url: url
      , headers: headers
    }, function (err, res, body) {
        if (err) { return callback(err); }
        if (res.statusCode === 404) {
            return callback(new Error("User doesn't exist."));
        }
        if (res.statusCode !== 200) {
            return callback(new Error("Cannot fetch data for this user."));
        }

        var $ = Cheerio.load(body)
          , $g = $("g > g")
          , $cRect = null
          , $rect = null
          , y = 0
          , resData = []
          , cDate = ""
          , cCount = null
          , cColor = ""
          , cMonth = null
          , monthHack = "MMM"
          ;

        for (; y < 7; ++y) {
            $g.each(function (i) {
                $rect = $("rect", this).eq(y)
                if (!$rect) { return; }
                cDate = $rect.attr("data-date");
                cCount = parseInt($rect.attr("data-count"));
                if (!cDate || isNaN(cCount)) { return; }
                resData.push([
                    cDate
                  , cCount
                ]);
            });
        }

        callback(null, resData);
    });
};
