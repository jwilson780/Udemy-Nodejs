const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017/ToDoApp";

const client = new MongoClient(url, { useNewUrlParser: true });


client.connect((err, client) => {
  if (err) {
   return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("ToDoApp");

//   //find one and update
//   db.collection('Todos').findOneAndUpdate(
//     {_id: new ObjectID('')
//   },{
//     $set: {
//       completed: true
//     }
//   },{
//       returnOrigional: false
//     }
//   ).then((res) => {
//     console.log(res);
//   });

//   client.close();
// });

//find one and update
db.collection('Users').findOneAndUpdate(
  {_id: new ObjectID('')
},{
  $set: {
    name: 'Jake'
  },
  $inc: {
    age: 1
  }
},{
    returnOrigional: false
  }
).then((res) => {
  console.log(res);
});

client.close();
});
