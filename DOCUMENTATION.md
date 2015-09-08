## Documentation
You can see below the API reference of this module.

### `GhCal(username)`
Fetches the GitHub contributions calendar data (in JSON format).

#### Params
- **String|Object** `username`: The username or an object containing:
 - `username` (String): The GitHub username.
 - `cookie` (String): An optional cookie. Could be useful to get the private calendar stats.

#### Return
- **Request** The request stream.

