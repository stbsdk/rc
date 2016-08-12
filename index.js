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
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

/* eslint quote-props: 0 */

// public
module.exports = {
    getCode: function ( event ) {
        var code = event.keyCode;

        // apply key modifiers
        if ( event.shiftKey ) { code += 1000; }
        if ( event.altKey )   { code += 2000; }

        return code;
    },

    codes: {
        back:         8,    // Backspace
        channelPrev:  1009, // Shift+Tab
        channelNext:  9,    // Tab
        ok:           13,   // Enter
        exit:         27,   // Esc
        pageUp:       33,
        pageDown:     34,
        end:          35,
        home:         36,
        left:         37,
        up:           38,
        right:        39,
        down:         40,
        'delete':     46,
        volumeUp:     107,  // NUMPAD +
        volumeDown:   109,  // NUMPAD -
        f1:           112,  // F1
        f2:           113,  // F2
        f3:           114,  // F3
        f4:           115,  // F4
        refresh:      116,  // F5
        frame:        117,  // F6
        phone:        119,  // F8
        set:          120,  // F9
        tv:           121,  // F10
        menu:         122,  // F11
        app:          123,  // F12
        rewind:       2066, // Alt+B
        forward:      2070, // Alt+F
        audio:        2071, // Alt+G
        standby:      2074, // Alt+J
        keyboard:     2076, // Alt+L
        usbMounted:   2080, // Alt+P
        usbUnmounted: 2081, // Alt+Q
        playPause:    2082, // Alt+R
        stop:         2083, // Alt+S
        power:        2085, // Alt+U
        record:       2087, // Alt+W
        info:         2089, // Alt+Y
        mute:         2192
    }
};
