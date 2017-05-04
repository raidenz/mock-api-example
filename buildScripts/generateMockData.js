/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

var jsf = require('json-schema-faker');
jsf.extend('faker', function() {
  // just ignore the passed faker instance
  // How to insert LOREM??
  // var faker = require('faker/locale/de');
  // do other stuff

  var faker = require('faker');

  return faker;
});
var mockDataSchema = require('./mockDataSchema');
var fs = require('fs');

var json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});

// prepare to append role
// But how to Know the role Without knowing user ID??
// Hmm...
// var role = {}
// fs.appendFile("./src/api/db.json", role, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });