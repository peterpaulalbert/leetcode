// Daily Question: 2025-06-12
// #3423. Maximum Difference Between Adjacent Elements in a Circular Array
// https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/description/?envType=daily-question&envId=2025-06-12


"use strict"

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAdjacentDistance(nums) {
	let output = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < nums.length; i++) {
		let j = i + 1;
		if (j === nums.length) {
			j = 0;
		}

		let diff = Math.abs(nums[i] - nums[j]);
		if(diff > output){
			output = diff
		}
	}
	return output;
};

console.log(maxAdjacentDistance([1, 2, 4]));
// expected: 3
console.log('-------------------------------------------------------');

console.log(maxAdjacentDistance([-5, -10, -5]));
// expected: 5
console.log('-------------------------------------------------------');



console.log(maxAdjacentDistance([0, 0]));
// expected: 
console.log('-------------------------------------------------------');

console.log(maxAdjacentDistance([1, 2, 3, 4, 5]));
// expected: 
console.log('-------------------------------------------------------');

console.log(maxAdjacentDistance([5, 4, 3, 2, 1]));
// expected: 
console.log('-------------------------------------------------------');

console.log(maxAdjacentDistance([-1, 2, -3, 4, -5, 6]));
// expected: 
console.log('-------------------------------------------------------');

console.log(maxAdjacentDistance([1, -2, 3, -4, 5, -6]));
// expected: 
console.log('-------------------------------------------------------');

console.log(maxAdjacentDistance([-13, -26, -42, 93, -23, 43, -95, 94, -73, 4, 5, -46, 39, -69, 98, 59, -72, -74, -48, 49, -75, 72, 75, 67, -42, -16, 20, -34, 50, -92, 93, 83, 44, -13, 100, -9, -99, 16, -43, 99, 48, -50, -77, -70, 45, 75, -69, -77, -6, -36, -3, 92, 66, 93, 35, 2, 58, -59, 82, -41, 86, 30, -17, 100, -93, 58, -38, -7, 68, 90, -8, -83, 53, 46, -14, 32, 0, -66, -9, -98, -11, -67, -55, -76, -23, 8, -94, 33, 9, 95, 68, 43, -86, 57, -58, 49, -17, 38, 72, 67]));
// expected: 
console.log('-------------------------------------------------------');
