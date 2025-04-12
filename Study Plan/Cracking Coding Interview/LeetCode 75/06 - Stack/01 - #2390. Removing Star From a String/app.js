// LeetCode 75: Stack
// #2390. Removing Star From a String
// https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75


"use strict";

/**
 * @param {string} s
 * @return {string}
 */
function removeStars(s) {
	let letters = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '*') {
			letters.pop();
		}
		else {
			letters.push(s[i]);
		}
	}
	return letters.join('');
};


console.log(removeStars("leet**cod*e"));
// expected: "lecoe"
console.log('-------------------------------------------------------');

console.log(removeStars("erase*****"));
// expected: ""
console.log('-------------------------------------------------------');

