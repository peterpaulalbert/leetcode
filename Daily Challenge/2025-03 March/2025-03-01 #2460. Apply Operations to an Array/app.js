console.log(applyOperations([1, 2, 2, 1, 1, 0])); // expected: [1,4,2,0,0,0]
console.log('-------------------------------------------------------')
console.log(applyOperations([0, 1])); // expected: [1,0]
console.log('-------------------------------------------------------')


/**
 * @param {number[]} nums
 * @return {number[]}
 */
function applyOperations(nums) {
	let shifted = new Array(nums.length);
	shifted.fill(0);
	let shiftedIndex = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			nums[i] = nums[i] * 2;
			nums[i + 1] = 0;
		}

		if (nums[i] > 0) {
			shifted[shiftedIndex] = nums[i];
			shiftedIndex++;
		}
	}
	if (nums[nums.length - 1] > 0) {
		shifted[shiftedIndex] = nums[nums.length - 1];
	}
	return shifted;
};