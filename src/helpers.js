/**
 * Selectors
 */
const $ = (selector, context) => (context || document).querySelectorAll(selector);
const $1 = (selector, context) => (context || document).querySelector(selector);

/**
 * Sibling Helpers
 */
function siblings(el, filter, type) {
    var siblings = [];
    while ((el = el[type])) { if (!filter || filter(el)) siblings.push(el); }
    return siblings;
}

const getNextSiblings = (el, filter) => siblings(el, filter, 'nextSibling');
const getPreviousSiblings = (el, filter) => siblings(el, filter, 'previousSibling');

/**
 * Misc.
 */
function extend(obj, src) {
    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
}

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

export { $, $1, extend, getNextSiblings, getPreviousSiblings, slide };