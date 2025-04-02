// LeetCode 75: Sliding Window
// #643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
	if (nums.length === 1) {
		return nums[0];
	}

	let maxAverage = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i <= nums.length - k; i++) {
		let sum = 0;
		let average = 0;
		for (let j = i; j < i + k; j++) {
			sum += nums[j];
		}
		average = sum / k;
		if (average > maxAverage) {
			maxAverage = average;
		}
	}

	return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// expected: 12.75000
console.log('-------------------------------------------------------');

console.log(findMaxAverage([5], 1));
// expected: 5.00000
console.log('-------------------------------------------------------');

console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
// expected: 1.25000
console.log('-------------------------------------------------------');
