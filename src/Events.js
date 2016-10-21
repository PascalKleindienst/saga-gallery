 import { $, $1, getNextSiblings, getPreviousSiblings } from './helpers';

/**
 * Used key codes
 */
const keys = {
    "esc": 27,
    "left": 37,
    "right": 39
};

/**
 * Check if key was pressed
 */
const isKey = (e, key) => {
    var code = window.event ? e.keyCode : e.which;

    return key in keys && code === keys[key];
};

/**
 * stop the immediate action of this event and prevent the event from bubbling up
 * and run the callback cb if possible
 */
const call = (e, cb) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (typeof cb === 'function') {
        return cb();
    }

    return false;
};

/**
 * Bind Events to gallery
 */
const bindEvents = (gallery) => {
    // click events
    const clickEvents = [
        { cb: gallery.open, selector: '.saga-slider' },
        { cb: gallery.close, selector: '.saga-close' },
        { cb: gallery.next, selector: '.saga-slider-nav .saga-next' },
        { cb: gallery.prev, selector: '.saga-slider-nav .saga-prev' }
    ];
    clickEvents.forEach(el => {
        $1(el.selector, gallery.el).addEventListener('click', e => call(e, el.cb.bind(gallery)));
    });

    // key events
    const keyEvents = [
        { cb: gallery.close, key: 'esc' },
        { cb: gallery.next, key: 'right' },
        { cb: gallery.prev, key: 'left' }
    ];
    keyEvents.forEach(el => {
        document.addEventListener('keydown', e => isKey(e, el.key) && el.cb.call(gallery));
    });
 };

 export { bindEvents };