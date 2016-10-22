import { $1, extend, slide } from './helpers';
import { createControls, createContainer } from './Markup';
import { bindEvents } from './Events';

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
        this.el.classList.add('saga-slider-active');

        if (typeof this.options.onOpen === 'function') {
            this.options.onOpen.call(this);
        }
    }

    close() {
        this.el.classList.remove('saga-slider-active');

        if (typeof this.options.onClose === 'function') {
            this.options.onClose.call(this);
        }
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