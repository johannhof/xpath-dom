# xpath-dom [![](https://travis-ci.org/johannhof/xpath-dom.svg)](https://travis-ci.org/johannhof/xpath-dom) [![](https://img.shields.io/npm/v/xpath-dom.svg)](https://www.npmjs.com/package/xpath-dom)
Easily use XPath with the DOM

```
npm install xpath-dom --save
```

```html
<script src="https://cdn.rawgit.com/johannhof/xpath-dom/master/dist/xpath-dom.min.js"></script>
```

## Browser Compatibility

All browsers support XPath really well except for IE.
For IE support please use Google's awesome [wicked-good-xpath](https://github.com/google/wicked-good-xpath/) shim.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/xpath-dom.svg)](https://saucelabs.com/u/xpath-dom)

## Usage

xpath-dom supports AMD, CommonJS and includes via script tag, where it exposes the `xpath` global.

```js
var xpath = require('xpath-dom');
```

### xpath.find(expression [, relativeTo])

Finds a DOM node by the specified XPath. Returns the first Node that matches the path.

Can be passed a DOM node to set as the relative root node.

```js
xpath.find("div/span[1]")
```

```js
xpath.find("div/span[1]", document.getElementById('main'))
```

### xpath.findAll(expression [, relativeTo])

Finds all DOM nodes that match the specified XPath.

Can be passed a DOM node to set as the relative root node.

```js
xpath.findAll("div/span[1]")
```

### xpath.getXPath(node [, relativeTo])

Returns a concise XPath given a DOM node. The XPath will match the given node,
but it is not guaranteed to uniquely match that node, e.g. there might
be other nodes that will be matched by that XPath in the document.

Can be passed a DOM node to set as the relative root node.

```js
xpath.getXPath(document.getElementById("headline"))
```

### xpath.getUniqueXPath(node [, relativeTo])

Returns a unique but slightly more verbose XPath given a DOM node.

Can be passed a DOM node to set as the relative root node.

```js
xpath.getUniqueXPath(document.getElementById("headline"))
```

