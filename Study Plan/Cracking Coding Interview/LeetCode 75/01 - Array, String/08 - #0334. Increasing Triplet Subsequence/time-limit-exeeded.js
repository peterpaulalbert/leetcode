// LeetCode 75: Array / String
// #334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

"use strict";

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
	let output = false;
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k]) {
					output = true;
				}
			}
		}
	}
	return output;
}


console.log(increasingTriplet([1, 2, 3, 4, 5]));
// expected: true
console.log('-------------------------------------------------------')

console.log(increasingTriplet([5, 4, 3, 2, 1]));
// expected: false
console.log('-------------------------------------------------------')

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
// expected: true
console.log('-------------------------------------------------------')
