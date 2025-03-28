// LeetCode 75: Array / String
// #443 String Compression
// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";

/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
	let compressed = [];
	let previous;
	let count;
	for (let c of chars) {
		if (c === previous) {
			count++;
		}
		else {
			if(previous){
				compressed.push(previous);
			}
			if (count > 1) {
				compressed.push(count.toString());
			}

			previous = c;
			count = 1;
		}
	}
	if(previous){
		compressed.push(previous);
	}
	if (count > 1) {
		compressed.push(count.toString());
	}
	chars = compressed;

	console.log(chars);
	return compressed.length;
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
