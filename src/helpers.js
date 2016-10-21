// select a list of matching elements, context is optional
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}

// select the first match only, context is optional
function $1(selector, context) {
    return (context || document).querySelector(selector);
}

// this helper accepts a filter function
function getNextSiblings(el, filter) {
    var siblings = [];
    while ((el = el.nextSibling)) { if (!filter || filter(el)) siblings.push(el); }
    return siblings;
}

// this helper accepts a filter function
function getPreviousSiblings(el, filter) {
    var siblings = [];
    while ((el = el.previousSibling)) { if (!filter || filter(el)) siblings.push(el); }
    return siblings;
}

function extend(obj, src) {
    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
}

export { $, $1, extend, getNextSiblings, getPreviousSiblings };