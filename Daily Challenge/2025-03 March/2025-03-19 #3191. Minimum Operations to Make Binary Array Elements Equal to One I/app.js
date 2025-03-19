// Daily Question: 2025-03-19
// #3191. Minimum Operations to Make Binary Array Elements Equal to One I
// https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/description/?envType=daily-question&envId=2025-03-19

/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
	let flips = 0;
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] === 0) {
			nums[i] = (nums[i] + 1) % 2;
			nums[i + 1] = (nums[i + 1] + 1) % 2;
			nums[i + 2] = (nums[i + 2] + 1) % 2;

			flips++;
		}
	}
	// console.log(nums);
	if (nums[nums.length - 1] === 0 || nums[nums.length - 2] === 0) {
		return -1;
	}

	return flips;
};



console.log(minOperations([0, 1, 1, 1, 0, 0]));
// expected: 3
console.log('-------------------------------------------------------')

console.log(minOperations([0, 1, 1, 1]));
// expected: -1
console.log('-------------------------------------------------------')

