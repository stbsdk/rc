/**
 * Global list of non-printable control key codes.
 *
 * At the moment `keypress` and `keydown` events are emitted for the same keys (for both printable and non-printable characters).
 *
 * WARNING!!! All codes in this file (except 'volumeUp' and 'volumeDown')
 * are used in window 'keydown' handler to prevent wrong 'keypress' firings.
 * If you add new code to this file 'keypress' event with this code will never fire.
 *
 *  Value | Description
 * -------|-------------
 *  +1000 | shift key pressed
 *  +2000 | alt key pressed
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var keys = require('spa-keys');


// add STB-specific keys
keys.back         = 8;    // Backspace
keys.channelPrev  = 1009; // Shift+Tab
keys.channelNext  = 9;    // Tab
keys.ok           = 13;   // Enter
keys.exit         = 27;   // Esc
keys.volumeUp     = 107;  // NUMPAD +
keys.volumeDown   = 109;  // NUMPAD -
keys.f1           = 112;  // F1
keys.f2           = 113;  // F2
keys.f3           = 114;  // F3
keys.f4           = 115;  // F4
keys.refresh      = 116;  // F5
keys.frame        = 117;  // F6
keys.phone        = 119;  // F8
keys.set          = 120;  // F9
keys.tv           = 121;  // F10
keys.menu         = 122;  // F11
keys.web          = 123;  // F12
keys.mic          = 2032;
keys.rewind       = 2066; // Alt+B
keys.forward      = 2070; // Alt+F
keys.app          = 2076; // Alt+L
keys.usbMounted   = 2080; // Alt+P
keys.usbUnmounted = 2081; // Alt+Q
keys.playPause    = 2082; // Alt+R
keys.stop         = 2083; // Alt+S
keys.power        = 2085; // Alt+U
keys.record       = 2087; // Alt+W
keys.info         = 2089; // Alt+Y
keys.mute         = 2192;
keys.clock        = 2032;
keys.audio        = 2071; // Alt+G
keys.keyboard     = 2076; // Alt+L


// public
module.exports = keys;
