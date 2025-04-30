// Daily Question: 2025-04-30
// #1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/?envType=daily-question&envId=2025-04-30


"use strict"


/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i] / 10;
		let even = true;
		while (num >= 0.1) {
			even = !even;
			num = num / 10;
		}
		if (even) {
			count++;
		}

	}
	return count;
};



console.log(findNumbers([12, 345, 2, 6, 7896]));
// expected: 2
console.log('-------------------------------------------------------');

console.log(findNumbers([555, 901, 482, 1771]));
// expected: 1
console.log('-------------------------------------------------------');

