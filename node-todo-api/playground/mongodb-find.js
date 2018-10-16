const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/ToDoApp";

const client = new MongoClient(url, { useNewUrlParser: true });


client.connect((err, client) => {
  if (err) {
   return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("ToDoApp");


  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('ToDos count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });

  db.collection('Users').find({name: 'Andrew'}).toArray().then((people) => {
    console.log(JSON.stringify(people, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  client.close();
});
