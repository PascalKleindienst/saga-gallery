import { $1, extend, slide } from './helpers';
import { createControls, createContainer } from './Markup';
import { bindEvents } from './Events';

/**
 * Set open / close state of gallery
 */
const setState = (open, gallery) => {
    if (open) {
        let cb = 'onOpen';
        gallery.el.classList.add('saga-slider-active');
    } else {
        let cb = 'onClose';
        gallery.el.classList.remove('saga-slider-active');
    }
    
    if (typeof gallery.options[type] === 'function') {
        return gallery.options[type].call(gallery);
    }
};

/**
 * Gallery Class
 */
export default class Gallery {
    constructor(id, options) {
        // create needed markup
        let el = document.getElementById(id);
        createContainer(el);
        createControls(el.parentNode);
        
        // set selected element if needed
        if ($1('.selected', el) === null) {
            $1('li:first-child', el).classList.add('selected');
        }
        
        // save props
        this.el = el.parentNode;
        this.options = extend({
            onClose: null,
            onOpen: null,
            loop: true
        }, options);

        // events
        bindEvents(this);        
    }

    open() {
        return setState(true, this);
    }

    close() {
        return setState(false, this);
    }

    isOpen() {
        return this.el.classList.contains('saga-slider-active');
    }

    next() {
        return slide('next', this);
    }

    prev() {
        return slide('prev', this);
    }
}