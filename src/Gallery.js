import { $1, extend, getNextSiblings, getPreviousSiblings } from './helpers';
import { createControls } from './Markup';
import { bindEvents } from './Events';

const slide = (direction, gallery) => {
    if (direction !== 'next' && direction !== 'prev') {
        return false;
    }
    
    if (gallery.isOpen()) {

        const filter = el => el.nodeName.toLowerCase() == 'li';
        let selected = $1('.saga-slider > .selected', gallery.el);
        let siblings = direction == 'next' ? getNextSiblings(selected, filter) : getPreviousSiblings(selected, filter);
                    
        if (siblings.length) {
            selected.classList.remove('selected');
            siblings[0].classList.add('selected');
        }

        else if (gallery.options.loop) {
            siblings = direction == 'next' ? getPreviousSiblings(selected, filter) : getNextSiblings(selected, filter);

            if (siblings.length) {
                selected.classList.remove('selected');
                siblings[siblings.length-1].classList.add('selected');
            }
        }
    }
}

export default class Gallery {
    constructor(selector, options) {
        this.el = document.getElementById(selector);
        this.options = extend({
            onClose: null,
            onOpen: null,
            loop: true
        }, options);

        createControls(this.el);
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
        slide('next', this);
    }

    prev() {
        slide('prev', this);
    }
}