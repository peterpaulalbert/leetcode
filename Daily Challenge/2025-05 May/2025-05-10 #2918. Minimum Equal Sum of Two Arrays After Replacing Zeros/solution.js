// Daily Question: 2025-05-10
// #2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
// https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/description/?envType=daily-question&envId=2025-05-10


"use strict"


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minSum(nums1, nums2) {
	let nums1sum = 0;
	let nums2sum = 0;
	let nums1zeroes = 0;
	let nums2zeroes = 0;

	for (let n of nums1) {
		nums1sum += n;
		if (n === 0) {
			nums1zeroes++;
		}
	}
	for (let n of nums2) {
		nums2sum += n;
		if (n === 0) {
			nums2zeroes++;
		}
	}

	if (nums1sum + nums1zeroes > nums2sum && nums2zeroes === 0) {
		return -1;
	}
	if (nums2sum + nums2zeroes > nums1sum && nums1zeroes === 0) {
		return -1;
	}
	if (nums1sum === nums2sum && ((nums1zeroes === 0) ^ (nums2zeroes === 0))) {
		return -1;
	}

	return Math.max(nums1sum + nums1zeroes, nums2sum + nums2zeroes)
};


console.log(minSum([3, 2, 0, 1, 0], [6, 5, 0]));
// expected: 12
console.log('-------------------------------------------------------');

console.log(minSum([2, 0, 2, 0], [1, 4]));
// expected: -1
console.log('-------------------------------------------------------');

console.log(minSum([3, 2, 0, 1, 0], [6, 1]));
// expected: 7?? should be -1
console.log('-------------------------------------------------------');

console.log(minSum([3, 2, 0, 1, 0], [6, 5, 0, 9, 8]));
// expected: 28
console.log('-------------------------------------------------------');

