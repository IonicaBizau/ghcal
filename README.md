![](http://i.imgur.com/yzElGZN.png)

# `$ ghcal`
See the GitHub contributions calendar of a user in the command line.

If you want to track all your git commits you make (even if don't push them anywhere), you should [check out the `git-stats` project](https://github.com/IonicaBizau/git-stats).

![](http://i.imgur.com/QmtGX5r.png)

## Installation

```sh
$ npm install -g ghcal
```

## Usage
### Default behavior
If you already created [`cli-github`](https://github.com/IonicaBizau/cli-github), then your GitHub
username is kept into `~/.github-config.json` and `ghcal` will use it if you don't pass another
username: `ghcal` will be the same with `ghcal <your-username>`.

```sh
$ ghcal
```

![](http://i.imgur.com/VmnibRQ.png)

### Passing the username

The first option is a GitHub username:

```sh
# Fetches the izuzak's contributions
$ ghcal izuzak
```

![](http://i.imgur.com/0r8QZyq.png)

### Themes
If you pass the `--light` option, then the light theme will be activated (the default theme is dark).

```sh
# jlord's contributions, light theme
$ ghcal jlord --light
```

![](http://i.imgur.com/cBHu7DD.png)

### No ANSI styles
The `--no-ansi` option disables any colors in the output. Unicode characters, without colors will be used.

```sh
$ ghcal pengwynn --no-ansi
```

![](http://i.imgur.com/2D0wxpv.png)

## Documentation
If you're planning to use it as module somewhere, then the following info is for you.

### `GhCal(username)`
Fetches the GitHub contributions calendar, converting it into ASCII art.

#### Params
- **String** `username`: The username.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
