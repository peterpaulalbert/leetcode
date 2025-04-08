// #3396. Minimum Number of Operations to Make Elements in Array Distinct
// https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/?envType=daily-question&envId=2025-04-08


"use strict";


/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
	let operations = 0;
	while (true) {
		if (hasDistinctElements(nums)) {
			return operations;
		}

		nums.splice(0, 3);
		operations++;
	}
};

function hasDistinctElements(nums) {
	if (nums.length === 0) {
		return true;
	}

	let distinctMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if(distinctMap.has(nums[i])){
			return false;
		}
		distinctMap.set(nums[i], 1);
	}
	return true;
}

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
// expected: 2
console.log('-------------------------------------------------------');

console.log(minimumOperations([4, 5, 6, 4, 4]));
// expected: 2
console.log('-------------------------------------------------------');

console.log(minimumOperations([6, 7, 8, 9]));
// expected: 0
console.log('-------------------------------------------------------');

