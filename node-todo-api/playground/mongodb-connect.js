import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ToDoApp";

const client = new MongoClient(url, { useNewUrlParser: true });

var user = {name: 'jake', age: 20};
var {name} = user; //object destructuring 
console.log(name);

client.connect((err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("ToDoApp");
  //   db.collection("Todos").insertOne(
  //     {
  //       text: "something to do",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to insert todo", err);
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  db.collection("Users").insertOne(
    {
      name: "El Chapo",
      age: 25,
      location: "Flipidelphia"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user", err);
      }
      console.log(result.ops);
    }
  );

  client.close();
});
