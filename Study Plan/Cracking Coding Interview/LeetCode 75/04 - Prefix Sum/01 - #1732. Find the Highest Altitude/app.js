// LeetCode 75: Sliding Window
// #1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
	let altitude = 0;
	let maxAltitude = 0;
	for (let i = 0; i < gain.length; i++) {
		altitude += gain[i];
		if (altitude > maxAltitude) {
			maxAltitude = altitude;
		}
	}
	return maxAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
// expected: 1
console.log('-------------------------------------------------------');

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
// expected: 0
console.log('-------------------------------------------------------');

