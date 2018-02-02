**React-baron**

## 2.0 breaking changes

All baron specified parameters now passed to `baron` _as is_ with `this.props.params` (see example below).

## How to use

React component for baron scrollbar customization support.

```
npm i react-baron --save
```

### Example

```js
Baron = require('react-baron');

...
<Baron>
  ...Scrollable content here...
</Baron>
```

```css
.clipper {
  overflow: hidden;
  height: 100%;
}
.scroller {
  overflow-y: scroll;
  height: 100%;
}

/* or, for flexbox */

.clipper {
  display: flex;
  overflow: hidden;
  height: 100%;
}
.scroller {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 1 1 auto;
}

/* And scrollbar */

.track {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0;
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
/* hide default chrome scrollbar */
.scroller::-webkit-scrollbar {
  width: 0;
  height: 0;
}
```

**API**

<Baron> props are all optional. You can see default props next to `=`:

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
// Scroll as far as possible
this.baronRef.scrollToLast()
// You have to set baronRef for Baron component before

// Get DOM-node scroller
this.baronRef.getScroller();

// Get DOM-node clipper
this.baronRef.getClipper();

// onScroll handler
onScroll: PropTypes.func;
```

## Browsers support

Same as [baron.js](https://github.com/Diokuz/baron).
