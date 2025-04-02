// LeetCode 75: Two Pointers
// 2873. Maximum Value of an Ordered Triplet I
// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/?envType=daily-question&envId=2025-04-02


"use strict";


/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumTripletValue(nums) {
	let maxTriplet = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				let triplet = (nums[i] - nums[j]) * nums[k];
				if (triplet > maxTriplet) {
					maxTriplet = triplet;
				}
			}
		}
	}

	return maxTriplet > 0 ? maxTriplet : 0;
};


console.log(maximumTripletValue([12, 6, 1, 2, 7]));
// expected: 77
console.log('-------------------------------------------------------');

console.log(maximumTripletValue([1, 10, 3, 4, 19]));
// expected: 133
console.log('-------------------------------------------------------');

console.log(maximumTripletValue([1, 2, 3]));
// expected: 0
console.log('-------------------------------------------------------');
