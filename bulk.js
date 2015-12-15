BulkOperation = class BulkOperation {
  constructor(collection, ordered) {
    this.rawCollection = collection.rawCollection();

    if(ordered)
      this._op = this.rawCollection.initializeOrderedBulkOp()
    else
      this._op = this.rawCollection.initializeUnorderedBulkOp()
  }

  find(query) {
    check(query, Object)
    var bulkFind = this._op.find(query);
    return {
      removeOne() {},
      remove() {},
      replaceOne() {},
      updateOne() {},
      update() {},
      upsert() {},
    }
  }

  insert(doc) {
    check(doc, Object)
    return this._op.insert(doc)
  }

  execute(writeConcern, callback){
    check(writeConcern, Match.OneOf(Object, Function))
    check(callback, Match.Optional(Function))
    return this._op.execute(writeConcern, callback)
  }

  getOperations() {

  }

  tojson() {

  }

  toString() {

  }
}
