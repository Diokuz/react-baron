# React-baron

1. Native scroll mechanic
2. No extra css (css-modules) by default
3. Flexible configuration:
    1. vertical, horizontal and bidirectional scroll;
    2. nested scrollers;
    3. flexbox;
    4. different width/height modes.
4. Full css customization: no inline styles, change css and/or classNames as you want
5. Auto show/hide/resize/update
6. Isomorphic (server side rendering support out of the box)
7. Wide range of browsers support (ie10+, Safari5+, Android4+, Opera11+)
8. 100% code coverage
9. 5.9 kB (gzip)

[Baron demo](http://diokuz.github.io/baron/)

## How to use

```
npm i react-baron --save
```

### Default way

```js
import Baron from 'react-baron'
// or Baron = require('react-baron')

...
<Baron>
  ...Scrollable content here...
</Baron>
```

Note: you need configured loaders: `babel-loader` and `css-modules` in your application.

If you have any problems this way, follow manual way:

### Manual way

1. Import from custom path:

```js
import Baron from 'react-baron/dist/es5'
// or Baron = require('react-baron/dist/es5')

...
<Baron>
  ...Scrollable content here...
</Baron>
```

2. Add css from `react-baron/src/styles.css` (via [postcss-global-import](https://www.npmjs.com/package/postcss-global-import) or something else):

```css
.clipper {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.scroller {
  overflow: auto;
  height: 100%;
}
.scroller::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.track {
  display: none;
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 0;
}
.track._h {
  top: auto;
  width: auto;
  height: 0;
  left: 2px;
}
.baron > .track {
  display: block;
}
.bar {
  position: absolute;
  right: 0;
  width: 6px;
  border-radius: 3px;
  background: #ccc;
}
.bar._h {
  bottom: 0;
  right: auto;
  width: auto;
  height: 6px;
}
```

Note: you can change any classNames: just pass them as props to Baron (see below).

## API

All <Baron> props are optional. You can see default props next to `=`:

```js
props.params = {defaultParams} // Object that will be passed to baron as `params` (see baron API https://github.com/Diokuz/baron)
props.clipperCls = "clipper"   // className for clipper/root dom node
props.scrollerCls = "scroller" // className for scroller dom node
props.trackCls = "track"       // className for track dom node
props.barCls = "bar"           // className for bar dom node

// Note, that defaultParams is not actually a default prop, it is a defaults for `props.params` object.
defaultParams = {
  barOnCls: 'baron',
  direction: 'v'
}
```

Plus, from within your component you have the following methods:

```js
// Define ref
<Baron ref={(r) => this.baronRef = r}>

// Then you have some ReactBaron methods

// Scroll as far as possible
this.baronRef.scrollToLast()

// Get DOM-node scroller
this.baronRef.getScroller();

// Get DOM-node clipper
this.baronRef.getClipper();

// onScroll handler
onScroll: PropTypes.func;
```

## Browsers support

| <img src="http://diokuz.github.io/pics/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://diokuz.github.io/pics/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://diokuz.github.io/pics/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://diokuz.github.io/pics/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://diokuz.github.io/pics/safari.png" width="48px" height="48px" alt="Safari logo"> | <img src="http://diokuz.github.io/pics/android.png" width="48px" height="48px" alt="Android browser logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8+ ✔ | 3.6+ ✔ | 10+ ✔ | 11.5+ ✔ | 5.1+ ✔ | 4+ ✔ |

## Alternatives

[react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)

## Troubleshooting

Wellcome to create an [issue](https://github.com/Diokuz/react-baron/issues/new)! Before that, exec this js script in your browser console (at the moment, when problem arises):

```js
!function(){console.group("Baron diagnosis");var o=document.querySelectorAll("[data-baron-v-id]");console.log("Total barons found: ",o.length),o.forEach(function(o,t){var e=o.children[0];console.group("Baron root "+t),console.log("Root: ",o),console.log("Maybe scroller: ",e),console.log("Root data: ",{scrollHeight:o.scrollHeight,offsetHeight:o.offsetHeight,overflow:o.style.overflow,clientWidth:o.clientWidth,offsetWidth:o.offsetWidth}),console.log("Scroller data: ",{scrollHeight:e.scrollHeight,offsetHeight:e.offsetHeight,clientWidth:e.clientWidth,offsetWidth:e.offsetWidth}),console.groupEnd()})}();
```

and copypaste output to your issue.
