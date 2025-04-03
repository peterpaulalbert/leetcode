// LeetCode 75: Sliding Window
// #1456. Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxVowels(s, k) {
	let maxCount = 0;
	let count = 0

	for (let i = 0; i < k; i++) {
		if ("aeiou".includes(s[i])) {
			count++;
		}
	}
	maxCount = count;

	for (let i = 1; i <= s.length - k; i++) {
		if ("aeiou".includes(s[i - 1])) {
			count--;
		}
		if ("aeiou".includes(s[i + k - 1])) {
			count++;
		}
		if (count > maxCount) {
			maxCount = count;
		}
	}

	return maxCount;
};


console.log(maxVowels("abciiidef", 3));
// expected: 3
console.log('-------------------------------------------------------');

console.log(maxVowels("aeiou", 2));
// expected: 2
console.log('-------------------------------------------------------');

console.log(maxVowels("leetcode", 3));
// expected: 2
console.log('-------------------------------------------------------');

