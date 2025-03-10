let t;
t = Date.now()
sleep(100)
	.then(() => console.log(Date.now() - t))
	.then(() => console.log('-------------------------------------------------------'))
	; // expected: 100

t = Date.now()
sleep(200)
	.then(() => console.log(Date.now() - t))
	.then(() => console.log('-------------------------------------------------------'))
	; // expected: 200


/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
	return new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */