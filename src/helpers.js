// select a list of matching elements, context is optional
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}

// select the first match only, context is optional
function $1(selector, context) {
    return (context || document).querySelector(selector);
}

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

// function removeClass(el, className) {
//     if (el.classList) el.classList.remove(className);
//     else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
// }

export { $, $1, hasClass, addClass };