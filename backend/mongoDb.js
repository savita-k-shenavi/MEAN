const MongoClient = require("mongodb").MongoClient;
var myDb;

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
/**
 * will reuse connection if already created
 */
function connect() {
  if (myDb === undefined) {
    client.connect(function(err, client) {
      if (err) {
        console.log("connect Error" + err);
      } else {
        myDb = client.db("posts");
        console.log(myDb);
        console.log("mongo connect done !!");
      }
    });
  }
  return myDb;
}

function getList(collectionName, callback) {
  if (myDb === undefined) {
    connect();
  }
  var collection = myDb.collection(collectionName);
  collection.find({}).toArray((err, docs) => {
    console.log(docs);
    callback(docs);
  });
}

function addData(collectionName, input, callback) {
  if (myDb === undefined) {
    connect();
  }
  var collection = myDb.collection(collectionName);
  collection.insert(input, function(err, docs) {
    console.log("data inserted successfully");
    callback(docs);
  });
}

function updateData(collectionName, clauseObj, input, callback) {
  if (myDb === undefined) {
    connect();
  }
  var collection = myDb.collection(collectionName);
  collection.update({ title: clauseObj }, { $set: input }, function(err,response) {
    console.log("updated the document");
    callback(response);
  });
}

function deleteData(collectionName, clauseObj, callback) {
  if (myDb === undefined) {
    connect();
  }
  var collection = myDb.collection(collectionName);
  collection.remove({ clauseObj}, function(err,response) {
    console.log("deleted the document");
    callback(response);
  });
}

exports.updateData = updateData;
exports.addData = addData;
exports.getList = getList;
exports.connect = connect;
