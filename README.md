
[![ghcal](http://i.imgur.com/yzElGZN.png)](#)

# `$ ghcal`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/ghcal.svg)](https://www.npmjs.com/package/ghcal) [![Downloads](https://img.shields.io/npm/dt/ghcal.svg)](https://www.npmjs.com/package/ghcal)

> See the GitHub contributions calendar of a user in the command line.

If you want to track all your git commits (even if you don't push them anywhere), you should [check out the `git-stats` project](https://github.com/IonicaBizau/git-stats).

[![ghcal](http://i.imgur.com/OhgCb8o.png)](#)

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g ghcal
```


Then, run `ghcal --help` and see what the CLI tool can do.


```
$ ghcal --help
Usage: ghcal [options]

Options:
  -u, --username <username>  The GitHub username. If you're using CLI GitHub,
                             by default it will be your username.
  -c, --cookie <cookie>      Your GitHub cookie. Useful to get private stats.
  -s, --since <date>         Optional start date.
  -e, --until <date>         Optional end date.
  -n, --no-ansi              Forces the tool not to use ANSI styles.
  -l, --light                Enables the light theme.
  -h, --help                 Displays this help.
  -v, --version              Displays version information.

Examples:
  ghcal -u ionicabizau
  ghcal -u ionicabizau --light
  ghcal -u ionicabizau --no-ansi
  ghcal -u ionicabizau -s '1 January 2015' # All the commits from 1 January 2015 to now
  ghcal -u ionicabizau -s '1 January 2015' -e '1 March 2015' # Select a time range

Note that only the last year statistics are available.

Documentation can be found at https://github.com/IonicaBizau/ghcal
```

## Usage
### Default behavior

If you are already using [`cli-github`](https://github.com/IonicaBizau/cli-github), then your GitHub username is kept into `~/.github-config.json` and `ghcal` will use it if you don't pass another username: `ghcal` will be the same with `ghcal -u <your-username>`.

```sh
ghcal
```
### Passing the username

 sing the `-u` (or `--username`) option, you can specify the GitHub username:

```sh
# Fetches the izuzak's contributions
$ ghcal -u izuzak
```
### Themes

If you pass the `--light` option, then the light theme will be activated (the default theme is dark).

```sh
# jlord's contributions, light theme
$ ghcal jlord --light
```
### No ANSI styles

The `--no-ansi` option disables any colors in the output. Unicode characters, without colors will be used.

```sh
# @pengywynn's contributions, but without ANSI styles
$ ghcal pengwynn --no-ansi
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save ghcal
```



```js
var GhCal = require("ghcal");

GhCal("ionicabizau", function (err, data) {
    console.log(err || data);
});
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`github-stats`](https://github.com/IonicaBizau/github-stats)—Visualize stats about GitHub users and projects in your terminal.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
