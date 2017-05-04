var exports = module.exports = {};

exports.make = (schema, num = 5) => {
	let records = [];
	for (let i = 1; i <= num; i++) {
	  records.push(schema(i))
	}
	return records;
};

exports.populate = (num = 5) => (fn) => Array.from({length: num}, fn, i => i);