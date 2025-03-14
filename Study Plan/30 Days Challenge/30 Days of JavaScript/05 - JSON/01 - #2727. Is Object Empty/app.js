console.log(isEmpty({ "x": 5, "y": 42 })); // expected: false
console.log('-------------------------------------------------------')

console.log(isEmpty({})); // expected: true
console.log('-------------------------------------------------------')

console.log(isEmpty([null, false, 0])); // expected: false
console.log('-------------------------------------------------------')

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
	return (Object.keys(obj).length === 0); // arrays: keys=indexes, objects: keys=property names
};