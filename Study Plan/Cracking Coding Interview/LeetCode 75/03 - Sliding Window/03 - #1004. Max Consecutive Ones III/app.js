// LeetCode 75: Sliding Window
// #1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
	let maxCount = 0;
	let start = 0;
	while (true) {
		let zeroes = 0;
		let count = 0;
		let end = start;
		while (zeroes <= k && end < nums.length) {
			if (nums[end] === 0) {
				zeroes++;
				if (zeroes > k) {
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
		if (start + k >= nums.length) {
			return maxCount;
		}
	}
};


console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// expected: 6
console.log('-------------------------------------------------------');

console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
// expected: 10
console.log('-------------------------------------------------------');
