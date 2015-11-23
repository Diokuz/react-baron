**React-baron**

react component for baron scrollbar customization support.

```
npm i react-baron --save
```

example:

```js
Baron = require('react-baron');

...
render: function() {
    return (
        <Baron
            clipperCls="block__clipper"
            scrollerCls="block__scroller">

            ...Scrollable content here...
        </Baron>
    );
}
```

```css
.block__clipper {
    overflow: hidden;
    height: 100%;
}
.block__scroller {
    overflow-y: scroll;
    height: 100%;
}

/* or, for flexbox */

.block__clipper {
    display: flex;
    overflow: hidden;
    height: 100%;
}
.block__scroller {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    flex: 1 1 auto;
}
```

**API**

Same as [baron.js](https://github.com/Diokuz/baron).
