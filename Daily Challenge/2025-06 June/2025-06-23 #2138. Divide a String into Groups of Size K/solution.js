// Daily Question: 2025-06-23
// #2138. Divide a String into Groups of Size K
// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/?envType=daily-question&envId=2025-06-22



"use strict"

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
function divideString(s, k, fill) {
	let substrings = [];
	for (let i = 0; i < s.length; i += k) {
		let substring = '';
		if (i + k <= s.length) {
			substring = s.slice(i, i + k);
		}
		else {
			substring = s.slice(i, s.length);
			for (let j = i; j < i + k - (s.length - i); j++) {
				substring = substring + fill;
			}
		}
		substrings.push(substring);
	}
	return substrings;
};



console.log(divideString("abcdefghi", 3, "x"));
// expected: ["abc","def","ghi"]
console.log('-------------------------------------------------------');

console.log(divideString("abcdefghij", 3, "x"));
// expected: ["abc","def","ghi","jxx"]
console.log('-------------------------------------------------------');


console.log(divideString("abcdefghijk", 3, "x"));
// expected: ["abc","def","ghi","jkx"]
console.log('-------------------------------------------------------');

console.log(divideString("xhrlbzwuudwiavwwqujvyegblttqfzl", 31, "e"));
// expected: ['xhrlbzwuudwiavwwqujvyegblttqfzl']
console.log('-------------------------------------------------------');

console.log(divideString("xhrlbzwuudwiavwwqujvyegblttqfzl", 30, "e"));
// expected: ['xhrlbzwuudwiavwwqujvyegblttqfz', 'leeeeeeeeeeeeeeeeeeeeeeeeeeeee']
console.log('-------------------------------------------------------');
