let fn;
fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); // expected: 65
console.log('-------------------------------------------------------')

fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
console.log(fn(1)); // expected: 1000
console.log('-------------------------------------------------------')

fn = compose([])
console.log(fn(42)); // expected: 42
console.log('-------------------------------------------------------')

/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
	return function(x) {
		for (let i = functions.length - 1; i >= 0; i--) {
			x = functions[i](x);
		}
		return x;
	}
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */