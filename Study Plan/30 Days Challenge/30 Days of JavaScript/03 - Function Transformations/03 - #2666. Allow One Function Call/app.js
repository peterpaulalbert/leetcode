let fn;
let onceFn;

fn = function (a, b, c) { return (a + b + c) }
onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // expected: 6
console.log(onceFn(2, 3, 6)); // expected: undefined
console.log('-------------------------------------------------------')

fn = function (a, b, c) { return (a * b * c) };
onceFn = once(fn);
console.log(onceFn(5, 7, 4)); // expected: 140
console.log(onceFn(2, 3, 6)); // expected: undefined
console.log(onceFn(4, 6, 8)); // expected: undefined
console.log('-------------------------------------------------------')

/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
	let called = false;
	return function (...args) {
		if (called) {
			return undefined;
		}
		else {
			called = true;
			return fn(...arguments);
		}
	}
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
