const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://application:QYSZNRNZKQjHdkaA@cluster0.gzxff.mongodb.net/database?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});