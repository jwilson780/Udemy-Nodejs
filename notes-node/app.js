console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Jake'));
var filteredArray = _.uniq(['Jake', 1, 'Jake', 1, 2, 3, 4]);
console.log(filteredArray);