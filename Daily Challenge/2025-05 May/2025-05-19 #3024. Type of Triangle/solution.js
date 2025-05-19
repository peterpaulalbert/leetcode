// Daily Question: 2025-05-19
// #3024. Type of Triangle
// https://leetcode.com/problems/type-of-triangle/description/?envType=daily-question&envId=2025-05-19


"use strict"

/**
 * @param {number[]} nums
 * @return {string}
 */
function triangleType(nums) {
	if (
		nums[0] + nums[1] <= nums[2] ||
		nums[1] + nums[2] <= nums[0] ||
		nums[2] + nums[0] <= nums[1]
	) {
		return "none";
	}

	if (
		nums[0] === nums[1] &&
		nums[1] === nums[2] &&
		nums[2] === nums[0]
	) {
		return "equilateral";
	}

	if (
		nums[0] === nums[1] ||
		nums[1] === nums[2] ||
		nums[2] === nums[0]
	) {
		return "isosceles";
	}

	return "scalene"

};


console.log(triangleType([3, 3, 3]));
// expected: "equilateral"
console.log('-------------------------------------------------------');

console.log(triangleType([3, 4, 5]));
// expected: "scalene"
console.log('-------------------------------------------------------');

console.log(triangleType([3, 3, 5]));
// expected: "isosceles"
console.log('-------------------------------------------------------');

console.log(triangleType([3, 3, 7]));
// expected: "none"
console.log('-------------------------------------------------------');

