// Daily Question: 2025-04-27
// #3392. Count Subarrays of Length Three With a Condition
// https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/description/?envType=daily-question&envId=2025-04-27


"use strict"


/**
 * @param {number[]} nums
 * @return {number}
 */
function countSubarrays(nums) {
	let count = 0;
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] + nums[i + 2] === nums[i + 1] / 2){
			count++;
		}
	}
	return count;
};



console.log(countSubarrays([1, 2, 1, 4, 1]));
// expected: 1
console.log('-------------------------------------------------------');

console.log(countSubarrays([1, 1, 1]));
// expected: 0
console.log('-------------------------------------------------------');

console.log(countSubarrays([1, 0, 1]));
// expected: 0
console.log('-------------------------------------------------------');

console.log(countSubarrays([0, -4, -4]));
// expected: 0
console.log('-------------------------------------------------------');

console.log(countSubarrays([-1, -4, -1, -4]));
// expected: 0
console.log('-------------------------------------------------------');

