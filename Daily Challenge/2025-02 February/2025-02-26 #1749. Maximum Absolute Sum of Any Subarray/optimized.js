// followed optimized looping by @charnavoki
// https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/6468066/two-lines-only/

console.log(maxAbsoluteSum([1, -3, 2, 3, -4])); // expected: 5
console.log('-------------------------------------------------------')
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2])); // expected: 8
console.log('-------------------------------------------------------')

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAbsoluteSum(nums) {
	let sum = 0;
	sums = nums.map(e => sum = sum + e);
	return Math.max(...sums, 0) - Math.min(...sums, 0);
};