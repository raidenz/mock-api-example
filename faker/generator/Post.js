var faker = require('faker');
var exports = module.exports = {};

exports.schema = (x, id) => {
	// prevent duplicate
	let title = faker.lorem.words();
	// let range = new Array(10);
	// _.range(1, 11) >> best with underscore
	// console.log(Array.from({length: 5}, (v, k) => k+1) );
	return {
		id: id + 1,
		title: title,
		slug: faker.helpers.slugify(title),
		body: faker.lorem.sentence(20),
		// user: faker.helpers.randomize([1,2,3,4,5,6,7,8]), // example randomize User
		// user: faker.helpers.randomize(Array.from(Array(10).keys())), // example randomize User
		user: faker.helpers.randomize(Array.from({length: 20}, (v, k) => k+1) ), // example randomize User
	}
}
