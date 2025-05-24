// Daily Question: 2025-05-24
// #2942. Find Words Containing Character
// https://leetcode.com/problems/find-words-containing-character/description/?envType=daily-question&envId=2025-05-24


"use strict"

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
function findWordsContaining(words, x) {
	let output = [];
	for (let i = 0; i < words.length; i++) {
		if (words[i].indexOf(x) > -1) {
			output.push(i);
		}
	}
	return output;
};

console.log(findWordsContaining(["leet", "code"], "e"));
// expected: [0,1]
console.log('-------------------------------------------------------');

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
// expected: [0,2]
console.log('-------------------------------------------------------');

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));
// expected: []
console.log('-------------------------------------------------------');
