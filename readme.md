STB SDK keys codes
==================

[![NPM version](https://img.shields.io/npm/v/stb-keys.svg?style=flat-square)](https://www.npmjs.com/package/stb-keys)
[![Dependencies Status](https://img.shields.io/david/stbsdk/keys.svg?style=flat-square)](https://david-dm.org/stbsdk/keys)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/stb)


Remote controls and keyboards generate key codes used in framework applications.
At the moment `keypress` and `keydown` events are emitted for the same keys (for both printable and non-printable characters).
Key code is its default key code from event plus 1000 in case shift key pressed and plus 2000 in case alt key pressed.


## Installation ##

```bash
npm install stb-keys
```


## Usage ##

Add to the scope:

```js
var keys = require('stb-keys');
```

In some event handler:
```js
if ( event.code === keys.ok ) {
    ...
}
```


## Debug mode ##

> There is a global var `DEBUG` which activates additional consistency checks and protection logic not available in release mode.

In debug mode the object is exposed to the global namespace as `window.keys`.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/stbsdk/keys/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`stb-keys` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
