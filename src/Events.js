 import { $, $1, getNextSiblings, getPreviousSiblings } from './helpers';

const keys = {
    "esc": 27,
    "left": 37,
    "right": 39
};

const isKey = (e, key) => {
    var code = window.event ? e.keyCode : e.which;

    if (key in keys) {
        return code === keys[key];
    }

    return false;
};

const bindEvents = (gallery) => {
    // open
    $1('.saga-slider', gallery.el).addEventListener('click', e => {
        e.preventDefault();
        gallery.open();
    });

    // close
    $1('.saga-close', gallery.el).addEventListener('click', e => {
        e.preventDefault();
        gallery.close();
    });

    document.addEventListener('keydown', e => {
        if (isKey(e, 'esc')) {
            gallery.close();
        }
    });
    
    // next
    $1('.saga-slider-nav .saga-next', gallery.el).addEventListener('click', e => {
        e.preventDefault();
        gallery.next();
    });
    document.addEventListener('keydown', e => {
        if (isKey(e, 'right')) {
            gallery.next();
        }
    });

    // prev
    $1('.saga-slider-nav .saga-prev', gallery.el).addEventListener('click', e => {
        e.preventDefault();
        gallery.prev();
    });
    document.addEventListener('keydown', e => {
        if (isKey(e, 'left')) {
            gallery.prev();
        }
    });
 };

 export { bindEvents };