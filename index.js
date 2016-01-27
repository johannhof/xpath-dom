exports.find = function(expression, relativeTo) {
  var snapshot = document.evaluate(
    expression,
    relativeTo || document.body,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  return snapshot.snapshotItem(0);
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

exports.getUniqueXPath = function(node, relativeTo){
  return exports.getXPath(node, relativeTo, true);
};

exports.getXPath = function(node, relativeTo, unique) {
  relativeTo = relativeTo || document.body;
  var lookBreaker = 0;
  var path = '';
  while(node !== relativeTo){
    if(lookBreaker++ > 1000){
      throw new Error('Got to maximum traversal level without reaching the root node.');
    }
    var position = 1;
    
    if (node.parentNode === undefined || node.parentNode === null)
      break;
    
    var siblings = node.parentNode.children;
    for (var i = 0; i < siblings.length; i++) {
      if(siblings[i] === node){
        break;
      }
      if(siblings[i].nodeName === node.nodeName){
        position++;
      }
    }
    var pos;
    if(unique){
      pos = "[" + position + "]";
    }else{
      pos = position > 1 ? "[" + position + "]" : '';
    }
    path = node.nodeName + pos + '/' + path;
    node = node.parentNode;
  }

  // remove the trailing slash
  path = path.slice(0, -1);

  return path.toLowerCase();
};
