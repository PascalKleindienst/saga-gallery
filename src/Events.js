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
    // open
    $1('.saga-slider', gallery.el).addEventListener('click', e => call(e, gallery.open.bind(gallery)));

    // close
    $1('.saga-close', gallery.el).addEventListener('click', e => call(e, gallery.close.bind(gallery)));
    document.addEventListener('keydown', e => isKey(e, 'esc') && gallery.close());
    
    // next
    $1('.saga-slider-nav .saga-next', gallery.el).addEventListener('click',e => call(e, gallery.next.bind(gallery)));
    document.addEventListener('keydown', e => isKey(e, 'right') && gallery.next());

    // prev
    $1('.saga-slider-nav .saga-prev', gallery.el).addEventListener('click', e => call(e, gallery.prev.bind(gallery)));
    document.addEventListener('keydown', e => isKey(e, 'left') && gallery.prev());
 };

 export { bindEvents };