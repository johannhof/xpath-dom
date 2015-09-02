(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xpath"] = factory();
	else
		root["xpath"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports) {

	exports.find = function(expression, relativeTo) {
	  return exports.findAll(expression, relativeTo)[0];
	};

	exports.findAll = function(expression, relativeTo) {
	  var snapshot = document.evaluate(
	    expression,
	    relativeTo || document.body,
	    null,
	    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
	    null
	  );

	  var nodes = [];
	  for(var i = 0; i < snapshot.snapshotLength; i++){
	      nodes.push(snapshot.snapshotItem(i));
	  }

	  return nodes;
	};

	exports.getXPath = function(node, relativeTo) {
	  relativeTo = relativeTo || document.body;
	  var lookBreaker = 0;
	  var path = '';
	  while(node !== relativeTo){
	    if(lookBreaker++ > 1000){
	      throw new Error('Got to maximum traversal level without reaching the root node.');
	    }
	    var position = 1;
	    var siblings = node.parentNode.children;
	    for (var i = 0; i < siblings.length; i++) {
	      if(siblings[i] === node){
	        break;
	      }
	      if(siblings[i].nodeName === node.nodeName){
	        position++;
	      }
	    }
	    var pos = position > 1 ? "[" + position + "]" : '';
	    path = node.nodeName + pos + '/' + path;
	    node = node.parentNode;
	  }

	  // remove the trailing slash
	  path = path.slice(0, -1);

	  return path.toLowerCase();
	};


/***/ }
/******/ ])
});
;