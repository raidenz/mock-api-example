var faker = require('faker');
var exports = module.exports = {};

let schema = (id) => {
	// prevent duplicate
	let name = faker.internet.userName();
	return {
		id: id,
		body: faker.lorem.sentence(20),
		postId: faker.helpers.randomize(Array.from({length: 20}, (v, k) => k+1)),
	}
}


exports.make = (num = 5) => {
	let records = [];
	for (let i = 1; i <= num; i++) {
	  records.push(schema(i))
	}
	return records;
};