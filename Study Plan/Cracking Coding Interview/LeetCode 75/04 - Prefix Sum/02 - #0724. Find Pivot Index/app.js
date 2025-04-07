// LeetCode 75: Sliding Window
// #724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
	for (let i = 0; i < nums.length; i++) {
		let left = 0;
		let right = 0;
		if (i === 0) {
			left = 0;
		}
		else {
			for (let j = i - 1; j >= 0; j--) {
				left += nums[j];
			}
		}
		if (i === nums.length - 1) {
			right = 0;
		}
		else {
			for (let j = i + 1; j < nums.length; j++) {
				right += nums[j];
			}
		}
		if (left === right) {
			return i;
		}
	}
	return -1;
};


console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// expected: 3
console.log('-------------------------------------------------------');

console.log(pivotIndex([1, 2, 3]));
// expected: -1
console.log('-------------------------------------------------------');

console.log(pivotIndex([2, 1, -1]));
// expected: 0
console.log('-------------------------------------------------------');

