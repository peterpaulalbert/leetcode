/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
	constructor(nums) {
		this.array = nums;
	}

	/**
	* @return {number}
	*/
	valueOf() {
		let output = 0;
		for (let i = 0; i < this.array.length; i++) {
			output += this.array[i];
		}
		return output;
	}

	/**
	* @return {string}
	*/
	toString() {
		let output = '[';
		for (let i = 0; i < this.array.length; i++) {
			output += this.array[i];
			if (i != this.array.length - 1) {
				output += ',';
			}
		}
		output += ']';
		return output;

	}

}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

let obj1;
let obj2;

obj1 = new ArrayWrapper([1,2]);
obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // expected: 10
console.log(String(obj1)); // expected: "[1,2]"
console.log(String(obj2)); // expected: "[3,4]"
console.log('-------------------------------------------------------')


obj1 = new ArrayWrapper([23,98,42,70]);
console.log(String(obj1)); // expected: "[23,98,42,70]"
console.log('-------------------------------------------------------')

obj1 = new ArrayWrapper([]);
obj2 = new ArrayWrapper([]);
console.log(obj1 + obj2); // expected: 0
console.log('-------------------------------------------------------')
