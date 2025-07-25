// Daily Question: 2025-07-25
// #3487. Maximum Unique Subarry Sum After Deletion
// https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/description/?envType=daily-question&envId=2025-07-25



"use strict"

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSum(nums) {
	let maxNegative = Number.MIN_SAFE_INTEGER;
	let uniquesSet = new Set();
	let uniquesSum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 0 && nums[i] > maxNegative) {
			maxNegative = nums[i];
		}
		if (!uniquesSet.has(nums[i]) && nums[i] >= 0) {
			uniquesSet.add(nums[i]);
			uniquesSum += nums[i];
		}
	}

	if (uniquesSet.size > 0) {
		return uniquesSum;
	}
	else {
		return maxNegative;
	}
};



console.log(maxSum([1, 2, 3, 4, 5]));
// expected: 15
console.log('-------------------------------------------------------');

console.log(maxSum([1, 1, 0, 1, 1]));
// expected: 1
console.log('-------------------------------------------------------');

console.log(maxSum([1, 2, -1, -2, 1, 0, -1]));
// expected: 3
console.log('-------------------------------------------------------');



console.log(maxSum([0]));
// expected: 0
console.log('-------------------------------------------------------');

console.log(maxSum([-1]));
// expected: -1
console.log('-------------------------------------------------------');

console.log(maxSum([6, 4, 6, 1, 4, 2, -2, -7, 5, -6]));
// expected: 18
console.log('-------------------------------------------------------');

