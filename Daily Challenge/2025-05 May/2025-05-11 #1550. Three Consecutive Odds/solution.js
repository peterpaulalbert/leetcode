// Daily Question: 2025-05-11
// #1550. Three Consecutive Odds
// https://leetcode.com/problems/three-consecutive-odds/description/?envType=daily-question&envId=2025-05-11


"use strict"


/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds(arr) {
	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
			return true;
		}
	}
	return false;
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
// expected: false
console.log('-------------------------------------------------------');

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
// expected: true
console.log('-------------------------------------------------------');
