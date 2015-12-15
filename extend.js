Meteor.addCollectionPrototype('initializeOrderedBulkOp', function() {
  return new BulkOperation(this, true);
});
Meteor.addCollectionPrototype('initializeUnorderedBulkOp', function() {
  return new BulkOperation(this, false);
});
