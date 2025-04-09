// Daily Question: 2025-04-09
// #3375. Minimum Operations to Make Array Values Equal to K
// https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/description/?envType=daily-question&envId=2025-04-09


"use strict";


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
	let min = Math.min(...nums);
	let max = Math.max(...nums);
	if (min < k) {
		return -1;
	}
	if (max === k) {
		return 0;
	}

	let operations = 0;
	while (k < max) {
		operations++;

		let h = Math.max(... (nums.filter((a) => a < max)));
		for (let i = 0; i < nums.length; i++) {
			if(nums[i] === max){
				nums[i] = h;
			}
		}

		max = h;
		//console.log(JSON.stringify(nums));
	}
	return operations;
};

console.log(minOperations([5, 2, 5, 4, 5], 2));
// expected: 2
console.log('-------------------------------------------------------');

console.log(minOperations([2, 1, 2], 2));
// expected: -1
console.log('-------------------------------------------------------');

console.log(minOperations([9, 7, 5, 3], 1));
// expected: 4
console.log('-------------------------------------------------------');

