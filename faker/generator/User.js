/**
 * Note:
 * Im note Sure what im doing
 * If you found any Error Or IDEA
 * Please Share and let Me Know
 */

var faker = require('faker');
var exports = module.exports = {};

let schema = (id) => {
	// prevent duplicate
	let name = faker.internet.userName();
	return {
		id: id,
		name: name,
		email: name.toLowerCase()+'@example.com', // email base on name
		role: faker.helpers.randomize(Array.from({length: 5}, (v, k) => k+1)), // example randomize role
	}
}


exports.make = (num = 5) => {
	let records = [];
	for (let i = 1; i <= num; i++) {
	  records.push(schema(i))
	}
	return records;
};