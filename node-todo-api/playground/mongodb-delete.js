const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/ToDoApp";

const client = new MongoClient(url, { useNewUrlParser: true });


client.connect((err, client) => {
  if (err) {
   return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("ToDoApp");

  //delete many
//   db.collection('Todos').deleteMany({completed: true}).then((result) => {
//       console.log(result);
//   });
  
  //delete one
//   db.collection('Todos').deleteOne({completed: false}).then((result) => {
//     console.log(result);
//   });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
});

  client.close();
});
