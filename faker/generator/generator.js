var fs = require('fs');
const helper = require('./helper');
const fakeUser = require('./User');
const fakePost = require('./Post');
const fakeComment = require('./Comment');
/**
 * Save Json To File
 */
const saveJson = (data) => {

	// writeFile to replace
	// appendFile to append file
	fs.writeFile("./db.json", JSON.stringify(data), function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	// console.log(data);
}

/**
 * Generate Random Data
 * const User = helper.make(fakeUser.schema(), 20);
 */
const user = fakeUser.make(20);
const post = fakePost.make(30);
const comment = fakeComment.make(90);


saveJson({user, post, comment});