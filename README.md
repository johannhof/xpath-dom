# xpath-dom [![](https://travis-ci.org/johannhof/xpath-dom.svg)](https://travis-ci.org/johannhof/xpath-dom) [![](https://img.shields.io/npm/v/xpath-dom.svg)](https://www.npmjs.com/package/xpath-dom)
Easily use XPath with the DOM

[![Sauce Test Status](https://saucelabs.com/browser-matrix/xpath-dom.svg)](https://saucelabs.com/u/xpath-dom)

```
npm install xpath-dom --save
```

## Usage

```js
var xpath = require('xpath-dom');
```

__xpath.find(expression [, relativeTo])__

Finds a DOM node by the specified XPath. Returns the first Node that matches the path.

Can be passed a DOM node to set as relative root node.

```js
xpath.find("div/span[1]")
```

__xpath.findAll(expression [, relativeTo])__

Finds all DOM nodes that match specified XPath.

Can be passed a DOM node to set as relative root node.

```js
xpath.find("div/span[1]")
```

__xpath.getXPath(node [, relativeTo])__

Returns a unique XPath given a DOM node.

Can be passed a DOM node to set as relative root node.

```js
xpath.getXPath(document.getElementById("headline"))
```

