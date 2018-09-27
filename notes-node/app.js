console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username} you are ${notes.age}!`, function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

var res = notes.add(5,6);
console.log(res);
