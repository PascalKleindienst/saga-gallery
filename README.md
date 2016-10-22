# Saga Gallery [![version][ico-version]][link-version] [![Installs][ico-installs]][link-installs] [![Downloads][ico-downloads]][link-downloads] [![license][ico-license]][link-license] [![Code Climate][ico-cc]][link-cc]

Saga Gallery is a simple and small lightbox gallery written in pure JavaScript.

* No dependencies required
* Simple API
* No extra files to download

## Installation
### Bower
```bash
bower install saga-gallery --save
```

### NPM
```bash
npm install saga-gallery --save
```

Include the saga-gallery CSS style in your head tags.
```HTML
<link rel="stylesheet" href="dist/saga-gallery.min.css">
```

Include the saga-gallery script in your head tags or right before your body closing tag.
```HTML
<script src="dist/saga-gallery.min.js"></script>
```

## Usage
### HTML
The Gallery is an unordered list with. A `li` with the class of `selected` specifies the element which is displayed. If none is specified the first element will be used.
Upon clicking the image the lightbox gallery opens.
```HTML
<ul id="foo">
    <li>
        <img src="http://placehold.it/350x350/2ecc71/ecf0f1" alt="Image 1">
        <div class="saga-description"><h3>Lorem</h3><p>Ipsum dolor sit amet</p></div>
    </li>
    <li><img src="http://placehold.it/350x350/3498db/ecf0f1" alt="Image 2"></li>
    <li><img src="http://placehold.it/350x350/e67e22/ecf0f1" alt="Image 3"></li>
    <li><img src="http://placehold.it/350x350/e74c3c/ecf0f1" alt="Image 4"></li>
</ul>
```

### Use The Plugin
Bind the gallery to a container element with id of `foo`
```JavaScript
// instanciate new gallery
var gallery = new SagaGallery('foo', {
    onOpen: function() {
        console.log('gallery open');
    },
    onClose: function() {
        console.log('gallery closed');
    },
    loop: false
});

// open gallery
gallery.open();

// close gallery
gallery.close();

// check if gallery is opened
if (gallery.isOpen()) 
    // do something ...

// display next image
gallery.next();

// display prev image
gallery.prev();
```

### Options
Default Options
```JavaScript
{
    onClose: null, // called after closing
    onOpen: null,  // called after opening
    loop: true     // true will return to the first image after the last image is reached
}
```

## API
| Name     | Description                                 |
|----------|---------------------------------------------|
| open()   | Open gallery and execute callback if exist  |
| close()  | Close gallery and execute callback if exist |
| isOpen() | Return true if gallery is opened            |
| next()   | Display next image in gallery               |
| prev()   | Display previous image in gallery           |

[ico-cc]: https://img.shields.io/codeclimate/github/PascalKleindienst/saga-gallery.svg?style=flat-square
[ico-downloads]: https://img.shields.io/github/downloads/PascalKleindienst/saga-gallery/total.svg?style=flat-square
[ico-installs]: https://img.shields.io/npm/dt/saga-gallery.svg?style=flat-square
[ico-version]: https://img.shields.io/npm/v/saga-gallery.svg?style=flat-square
[ico-license]: https://img.shields.io/github/license/PascalKleindienst/saga-gallery.svg?style=flat-square

[link-cc]: https://codeclimate.com/github/PascalKleindienst/saga-gallery
[link-downloads]: https://github.com/PascalKleindienst/saga-gallery/archive/master.zip
[link-installs]: https://www.npmjs.com/package/saga-gallery
[link-version]: https://www.npmjs.com/package/saga-gallery
[link-license]: https://raw.githubusercontent.com/PascalKleindienst/saga-gallery/master/LICENSE
