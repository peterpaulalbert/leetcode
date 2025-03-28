// LeetCode 75: Array / String
// #443 String Compression
// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";

/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
	let character = chars[0];
	let count = 1;
	let start = 0;
	let i = 1;
	while (i <= chars.length) {
		if (chars[i] === character) {
			count++;
			i++;
			continue;
		}

		if (count === 1) {
			start += 1;
			character = chars[start];
			count = 1;
			i = start + 1;
			continue;
		}

		let countArr = [...count.toString()]
		chars.splice(start + 1, count - 1, ...countArr);
		start += 1 + countArr.length;
		character = chars[start];
		count = 1;
		i = start + 1;
	}

	console.log(chars);
	return chars.length;
};


console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
// expected: 6 // "a2b2c3"
console.log('-------------------------------------------------------')

console.log(compress(["a"]));
// expected: 1 // "a"
console.log('-------------------------------------------------------')

console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));
// expected: 4 // "ab12"
console.log('-------------------------------------------------------')
