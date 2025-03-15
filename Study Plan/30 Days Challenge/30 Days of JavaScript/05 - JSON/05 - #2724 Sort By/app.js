console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // expected: [1, 2, 3, 4, 5]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x))); // expected: [{"x": -1}, {"x": 0}, {"x": 1}]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]))); // expected: [[10, 1], [5, 2], [3, 4]]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(sortBy([[5,4],[10,0],[6,7],[15,1]], (x) => x[0] + x[1]))); // expected: [[5,4],[10,0],[6,7],[15,1]]
console.log('-------------------------------------------------------')

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortBy(arr, fn) {
	let calculated = new Map();
	for (let i = 0; i < arr.length; i++) {
		//console.log(`arr[i]: ${arr[i]}, fn(arr[i]): ${fn(arr[i])}`);
		calculated.set(fn(arr[i]), arr[i]);
	}
	let order = calculated.keys().toArray().sort((a, b) => a - b);
	let sorted = [];
	for (let i = 0; i < order.length; i++) {
		sorted.push(calculated.get(order[i]))
	}
	return sorted;
};

