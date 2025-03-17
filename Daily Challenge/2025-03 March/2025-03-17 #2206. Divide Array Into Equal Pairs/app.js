console.log(divideArray([3,2,3,2,2,2])); // expected: true
console.log('-------------------------------------------------------')

console.log(divideArray([1,2,3,4])); // expected: false
console.log('-------------------------------------------------------')


/**
 * @param {number[]} nums
 * @return {boolean}
 */
function divideArray(nums) {
	let counts = new Map();
	for (i = 0; i < nums.length; i++) {
		if (counts.has(nums[i])) {
			let c = counts.get(nums[i]);
			counts.set(nums[i], c + 1);
		}
		else {
			counts.set(nums[i], 1);
		}
	}
	let output = true;
	counts.forEach((value, key, map) => {
		if (value % 2 === 1) {
			output = false;
		}
	});
	return output;
};