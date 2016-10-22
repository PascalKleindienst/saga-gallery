/**
 * Wrap gallery with container
 */
const createContainer = (el) => {
    let container = document.createElement('div');
    container.classList.add('saga-gallery');
    el.classList.add('saga-slider');

    // wrap el with container
    el.parentNode.insertBefore(container, el);
    container.appendChild(el);
};

/**
 * Create Control Elements
 */
const createControls = (el) => {
    let ul = document.createElement('ul');
    let controls = ['prev', 'next'];

    controls.forEach( el => {
        let control =  document.createElement('li');
        control.innerHTML = `<a href="#0" class="saga-${el}">${el}</a>`;
        ul.appendChild(control);
    });
        
    ul.classList.add('saga-slider-nav');
        
    let close = document.createElement('a');
    close.href = '#0';
    close.classList.add('saga-close');

    el.classList.add('saga-gallery');
    el.appendChild(ul);
    el.appendChild(close);
};

export { createControls, createContainer, setSelected };