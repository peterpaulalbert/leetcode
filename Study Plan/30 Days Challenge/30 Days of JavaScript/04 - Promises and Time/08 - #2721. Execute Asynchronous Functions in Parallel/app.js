// followed resolve() requirement explanation by @hanoh
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solutions/3888598/promises-are-confusing-i-wrote-some-notes-down-for-you/


/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
function promiseAll(functions) {
	return new Promise((resolve, reject) => {
		let output = new Array(functions.length);
		let count = 0;
		for (let i=0; i<functions.length; i++) {
			functions[i]()
				.then(
					result => {
						output[i] = result;
						count++;

                        // resolve only when all functions are resolved
						if(count===functions.length){
							resolve(output) 
						}
					}
				)
				.catch(error => reject(error)); // reject asap
		}
	});
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
