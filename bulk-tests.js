var collection = new Mongo.Collection('test')

Tinytest.add('maximum:bulk - example', function (test) {
  var bulk = collection.initializeOrderedBulkOp()
  bulk.insert({test: true});
  bulk.find( { status: "D" } ).remove();
  bulk.find( { status: "P" } ).update( { $set: { points: 0 } } )
  bulk.execute(function(error, result){
    if(error) throw error;
    console.log(result);
  });
});
