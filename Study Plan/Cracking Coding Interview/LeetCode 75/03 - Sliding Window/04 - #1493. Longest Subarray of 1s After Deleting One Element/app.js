// LeetCode 75: Sliding Window
// #1493. Longest Subarray of 1s After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} nums
 * @return {number}
 */
function longestSubarray(nums) {
	let maxCount = 0;
	let start = 0;
	while (true) {
		let zeroes = 0;
		let count = 0;
		let end = start;
		while (zeroes <= 1 && end < nums.length) {
			if (nums[end] === 0) {
				zeroes++;
				if (zeroes > 1) {
					break;
				}
			}
			end++;
			count++;
		}

		if (count > maxCount) {
			maxCount = count;
		}

		start++;
		if (start + 1 >= nums.length) {
			return maxCount - 1; // less the allowed zero
		}
	}
};


console.log(longestSubarray([1, 1, 0, 1]));
// expected: 3
console.log('-------------------------------------------------------');

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
// expected: 5
console.log('-------------------------------------------------------');

console.log(longestSubarray([1, 1, 1]));
// expected: 2
console.log('-------------------------------------------------------');

