console.log(JSON.stringify(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)));
// expected: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)));
// expected: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)));
// expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log('-------------------------------------------------------')


/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flat(arr, n) {
	if (n === 0) {
		return arr;
	}

	let flattenedArray = [];
	for (let i = 0; i < arr.length; i++) {
		flattenChild(arr[i], n, flattenedArray);
	}
	return flattenedArray;
};

function flattenChild(child, depth, flattenedArray) {
	if (Array.isArray(child) && depth > 0) {
		for (let i = 0; i < child.length; i++) {
			flattenChild(child[i], depth - 1, flattenedArray);
		}
	}
	else {
		flattenedArray.push(child);
	}

}