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

export { $, $1, extend, getNextSiblings, getPreviousSiblings };