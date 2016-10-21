import { $, addClass } from './helpers';

export default class Gallery {
    constructor(selector, options) {
        this.el = $(selector);
        this.createControls();
        console.log('Init Gallery', this.el);
    }

    createControls() {
        let ul = document.createElement('ul');
        let controls = ['prev', 'next'];

        controls.forEach( el => {
            let control =  document.createElement('li');
            control.innerHTML = `<a href="#0" class="saga-${el}">${el}</a>`;
            ul.appendChild(control);
        });
        
        addClass(ul, 'saga-gallery-nav');
        
        let close = document.createElement('a');
        close.text = 'Close';
        close.href = '#0';
        addClass(close, 'saga-close');

        this.el.forEach( (el, i) => {
            addClass(el, 'saga-gallery');
            el.setAttribute('data-gallery', i);
            el.appendChild(ul);
            el.appendChild(close);
        });
    }
}