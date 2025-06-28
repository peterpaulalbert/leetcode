// Daily Question: 2025-06-28
// #2099. Find Subsequence of Length K With the Largest Sum
// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/?envType=daily-question&envId=2025-06-28



"use strict"

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSubsequence(nums, k) {
	let output = [];
	let indexes = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (indexes.has(nums[i])) {
			indexes.get(nums[i]).push(i);
		}
		else {
			indexes.set(nums[i], [i]);
		}
	}
	let sorted = Array.from(indexes.keys()).sort((a, b) => b - a);

	let values = [];
	for (let i = 0; i < sorted.length; i++) {
		let valueIndexes = indexes.get(sorted[i]);
		for (let j = 0; j < valueIndexes.length; j++) {
			values.push(nums[valueIndexes[j]]);
			k--;
			if (k === 0) {
				break;
			}

		}
		if (k === 0) {
			break;
		};
	}

	for (let i = 0; i < nums.length; i++) {
		let index = values.findIndex((e) => e === nums[i]);
		if (index > -1) {
			output.push(nums[i]);
			values.splice(index, 1);
		}
	}
	return output;
};



console.log(maxSubsequence([2, 1, 3, 3], 2));
// expected: [3, 3]
console.log('-------------------------------------------------------');

console.log(maxSubsequence([-1, -2, 3, 4], 3));
// expected: [-1,3,4]
console.log('-------------------------------------------------------');

console.log(maxSubsequence([3, 4, 3, 3], 2));
// expected: [3,4]
console.log('-------------------------------------------------------');



console.log(maxSubsequence([-16,-13,8,16,35,-17,30,-8,34,-2,-29,-35,15,13,-30,-34,6,15,28,-23,34,28,-24,15,-17,10,31,32,-3,-36,19,31,-5,-21,-33,-18,-23,-37,-15,12,-28,-40,1,38,38,-38,33,-35,-28,-40,4,-15,-29,-33,-18,-9,-29,20,1,36,-8,23,-34,16,-7,13,39,38,7,-7,-10,30,9,26,27,-37,-18,-25,14,-36,23,28,-15,35,-9,1], 8));
// expected:  [35,34,38,38,36,39,38,35]
console.log('-------------------------------------------------------');

