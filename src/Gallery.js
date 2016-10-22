import { $1, extend, getNextSiblings, getPreviousSiblings } from './helpers';
import { createControls } from './Markup';
import { bindEvents } from './Events';

/**
 * Slide to next or previous item
 */
function slide (direction, gallery) {
    // slide only when gallery is opened and direction is next/prev
    if (gallery.isOpen() && (direction === 'next' || direction === 'prev')) {
        const filter = el => el.nodeName.toLowerCase() === 'li';
        let index = 0;
        let selected = $1('.saga-slider > .selected', gallery.el);
        let siblings = {
            next: getNextSiblings(selected, filter),
            prev: getPreviousSiblings(selected, filter)
        };

        // Loop after last element => swap prev and next siblings and correct index
        if (siblings[direction].length === 0 && gallery.options.loop) {
            siblings = {next: siblings.prev, prev: siblings.next};
            index = siblings[direction].length-1;
        }

        // slide to next/prev element
        if (siblings[direction].length) {
            selected.classList.remove('selected');
            siblings[direction][index].classList.add('selected');

            return siblings[direction][index];
        }
    }

    return null;
}

/**
 * Gallery Class
 */
export default class Gallery {
    constructor(id, options) {
        this.el = document.getElementById(id);
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
        return slide('next', this);
    }

    prev() {
        return slide('prev', this);
    }
}