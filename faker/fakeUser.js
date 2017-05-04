/**
 * Note:
 * Im note Sure what im doing
 * If you found any Error Please let Me Know
 */

var faker = require('faker');
var fs = require('fs');

let createRecord = (id) => {
	let data ={
		id: id,
		name: faker.internet.userName(),
	}
	return data;
}

let records = [];

let repeat = 5;
for (let i = 1; i <= repeat; i++) {
  records.push(createRecord(i))
}

module.export = Promise.all(records).then(values => {
  // console.log('all', values);
	let json = JSON.stringify(values);
	fs.appendFile("./db.json", json, function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	return json;
});
// const telo = Promise.all(records);
// module.export = telo;