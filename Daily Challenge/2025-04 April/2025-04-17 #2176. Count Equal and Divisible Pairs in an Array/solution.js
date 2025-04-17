// Daily Question: 2025-04-17
// #2176. Count Equal and Divisible Pairs in an Array
// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/description/?envType=daily-question&envId=2025-04-17


"use strict"


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countPairs(nums, k) {
	let pairs = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j] && (i * j) % k === 0) {
				pairs++;
			}
		}
	}
	return pairs;
};


console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
// expected: 4
console.log('-------------------------------------------------------');

console.log(countPairs([1, 2, 3, 4], 1));
// expected: 0
console.log('-------------------------------------------------------');

