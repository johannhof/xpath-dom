exports.find = function(expression, relativeTo) {
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

exports.getXPath = function(node) {
  //while(node !== document){
  //}
};
