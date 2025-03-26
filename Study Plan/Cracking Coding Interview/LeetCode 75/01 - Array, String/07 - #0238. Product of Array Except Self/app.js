// LeetCode 75: Array / String
// #238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
	let prefixes = new Array(nums.length).fill(1);
	let suffixes = new Array(nums.length).fill(1);
	let answers = new Array(nums.length).fill(1);

	for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
		let previous = i > 0 ? nums[i - 1] : 1;
		let prefix = i > 0 ? prefixes[i - 1] : 1;
		prefixes[i] = previous * prefix;

		let succeeding = j < nums.length - 1 ? nums[j + 1] : 1;
		let suffix = j < nums.length - 1 ? suffixes[j + 1] : 1;
		suffixes[j] = succeeding * suffix;
	}
	for (let i = 0; i < nums.length; i++) {
		answers[i] = prefixes[i] * suffixes[i];
	}
	return answers;
};


console.log(productExceptSelf([1, 2, 3, 4]));
// expected: [24,12,8,6]
console.log('-------------------------------------------------------')

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// expected: [0,0,9,0,0]
console.log('-------------------------------------------------------')
