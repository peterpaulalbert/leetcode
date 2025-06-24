// Daily Question: 2025-06-24
// #2200. Find All K-Distant Indices in an Array
// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/description/?envType=daily-question&envId=2025-06-24



"use strict"

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
function findKDistantIndices(nums, key, k) {
	let keyIndices = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === key) {
			keyIndices.push(i);
		}
	}

	let kDistantIndices = [];
	for (let i = 0; i < nums.length; i++) {
		let isKDistant = false;
		for (let keyIndex = 0; keyIndex < keyIndices.length; keyIndex++) {
			if (Math.abs(i - keyIndices[keyIndex]) <= k) {
				isKDistant = true;
			}
		}
		if (isKDistant) {
			kDistantIndices.push(i);
		}
	}

	return kDistantIndices;
};



console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
// expected: [1,2,3,4,5,6]
console.log('-------------------------------------------------------');

console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
// expected: [0,1,2,3,4]
console.log('-------------------------------------------------------');

