const { populate, saveDb } = require('./helper');
const {
	fakeUser,
	fakePost,
	fakeComment
} = require('./schema');

let user = populate(2000, fakeUser);
let post = populate(2000, fakePost);
let comment = populate(2000, fakeComment);

/**
 * saveDb({user, post, comment});
 * Send to Promise:
 * Why ?
 * Node run parallel
 * If you populate thousand data, it will fail
 * because it write to json
 * before all data finish to populate
 */
Promise.all([user, post, comment]).then(([user , post, comment]) => {
	saveDb({user, post, comment});
});

