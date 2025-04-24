// Daily Question: 2025-04-24
// #2799. Count Complete Subarrays in an Array
// https://leetcode.com/problems/count-complete-subarrays-in-an-array/description/?envType=daily-question&envId=2025-04-24


"use strict"


/**
 * @param {number[]} nums
 * @return {number}
 */
function countCompleteSubarrays(nums) {
	let count = 0;
	let fullSet = new Set(nums);
	for (let i = 0; i < nums.length - fullSet.size + 1; i++) {
		for (let j = i + fullSet.size - 1; j < nums.length; j++) {
			let subset = new Set(nums.slice(i, j + 1)); // slice excludes array[end]
			//console.log(`i: ${i}, j: ${j}, slice: ${nums.slice(i, j)}, subset: ${[...subset]}`)
			if (subset.isSupersetOf(fullSet)) {
				count++;
			}
		}
	}
	return count;
};


console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));
// expected: 4
console.log('-------------------------------------------------------');

console.log(countCompleteSubarrays([5, 5, 5, 5]));
// expected: 10
console.log('-------------------------------------------------------');

