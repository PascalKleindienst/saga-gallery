import { $1, extend, getNextSiblings, getPreviousSiblings } from './helpers';
import { createControls, createContainer } from './Markup';
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