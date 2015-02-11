// Dependencies
var Cheerio = require("cheerio")
  , Request = require("request")
  , CliBox = require("cli-box")
  , AnsiParser = require("ansi-parser")
  ;

// Constants
const LEVELS = {
        "#eeeeee": "⬚"
      , "#d6e685": "▢"
      , "#8cc665": "▤"
      , "#44a340": "▣"
      , "#1e6823": "■"
      }
    , DAYS = [
        "Sun"
      , "Mon"
      , "Tue"
      , "Wed"
      , "Thu"
      , "Fri"
      , "Sat"
      ]
    , MONTHS = [
        "Jan"
      , "Feb"
      , "Mar"
      , "Apr"
      , "May"
      , "Jun"
      , "Jul"
      , "Aug"
      , "Sep"
      , "Oct"
      , "Nov"
      , "Dec"
      ]
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

    if (!username) {
        return callback(new Error("Invalid username."));
    }

    var url = "http://github.com/users/" + username + "/contributions";
    Request(url, function (err, res, body) {
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
          , str = ""
          , months = []
          , cDate = ""
          , cColor = ""
          , cMonth = null
          , monthHack = "MMM"
          , eq = -1
          ;

        for (; y < 7; ++y) {
            str += DAYS[y] + " ";
            $g.each(function (i) {
                $rect = $("rect", this);
                eq = y;
                if (i === 0) {
                    eq = y - 7 + $rect.length
                    if (eq < 0) {
                        str += "  ";
                        return;
                    }
                }
                $cRect = $rect.eq(eq);
                cColor = $cRect.attr("fill");
                cDate = $cRect.attr("data-date");
                if (!cColor || !cDate) { return; }
                str += LEVELS[cColor] + " ";
                cMonth = parseInt(cDate.split("-")[1]) - 1;
                if (months.indexOf(MONTHS[cMonth]) === -1) {
                    months.push(MONTHS[cMonth]);
                }
            });
            str += "\n";
        }

        str = monthHack + months.join("      ") + "\n" + str;
        str = new CliBox({
            w: 10
          , h: 10
          , marks: {
                nw: "╔"
              , n:  "═"
              , ne: "╗"
              , e:  "║"
              , se: "╝"
              , s:  "═"
              , sw: "╚"
              , w:  "║"
              , b: " "
            }
        }, {
            text: str
          , stretch: true
          , hAlign: "left"
        }).toString();

        str = AnsiParser.removeAnsi(str);
        str = str.replace(monthHack, new Array(monthHack.length + 1).join(" "));

        callback(null, str);
    });
};
