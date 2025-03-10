promise1 = new Promise(resolve => resolve(2));
promise2 = new Promise(resolve => resolve(5));
addTwoPromises(promise1, promise2)
	.then(output => console.log(output))
	.then(() => console.log('-------------------------------------------------------'))
	; // expected: 7

promise1 = new Promise(resolve => resolve(10));
promise2 = new Promise(resolve => resolve(-12));
addTwoPromises(promise1, promise2)
	.then(output => console.log(output))
	.then(() => console.log('-------------------------------------------------------'))
	; // expected: -2

	

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
async function addTwoPromises(promise1, promise2) {
	return (await promise1) + (await promise2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */