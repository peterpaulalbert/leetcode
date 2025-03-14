/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
	if (this.length === 0) {
		return -1;
	}
	else {
		return this[this.length - 1];
	}
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

let arr;

arr = [1, 2, 3];
console.log(arr.last()); // expected: 3
console.log('-------------------------------------------------------')

arr = [];
console.log(arr.last()); // expected: -1
console.log('-------------------------------------------------------')
