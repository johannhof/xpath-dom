# xpath-dom [![](https://travis-ci.org/johannhof/xpath-dom.svg)](https://travis-ci.org/johannhof/xpath-dom) [![](https://img.shields.io/npm/v/xpath-dom.svg)](https://www.npmjs.com/package/xpath-dom)
Easily use XPath with the DOM

```
npm install xpath-dom --save
```

## Usage

```js
var xpath = require('xpath-dom');
```

### xpath.find(expression [, relativeTo])

Finds a DOM node by the specified XPath. Returns the first Node that matches the path.

Can be passed a DOM node to set as relative root node.

```js
xpath.find("div/span[1]")
```

### xpath.findAll(expression [, relativeTo])

Finds all DOM nodes that match specified XPath.

Can be passed a DOM node to set as relative root node.

```js
xpath.find("div/span[1]")
```

### xpath.getXPath(node [, relativeTo])

Returns a concise XPath given a DOM node. The XPath will match the given node,
but it is not guaranteed to uniquely match that node, e.g. there might
be other nodes that will be matched by that XPath in the document.

Can be passed a DOM node to set as relative root node.

```js
xpath.getXPath(document.getElementById("headline"))
```

### xpath.getUniqueXPath(node [, relativeTo])

Returns a unique but slightly more verbose XPath given a DOM node.

Can be passed a DOM node to set as relative root node.

```js
xpath.getUniqueXPath(document.getElementById("headline"))
```

## Browser Compatibility

[![Sauce Test Status](https://saucelabs.com/browser-matrix/xpath-dom.svg)](https://saucelabs.com/u/xpath-dom)

