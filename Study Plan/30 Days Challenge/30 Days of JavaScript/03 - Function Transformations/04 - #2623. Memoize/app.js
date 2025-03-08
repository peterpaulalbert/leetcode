/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
	let memo = new Map();
	return function (...args) {
		let fnArgs = JSON.stringify(arguments);
		if (memo.has(fnArgs)) {
			return memo.get(fnArgs);
		}
		else {
			let output = fn(...arguments);
			memo.set(fnArgs, output);
			return output;
		}

	}
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */