// LeetCode 75: Hash Map / Set
// #1657. Determine if Two Strings are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
	if (word1.length !== word2.length) {
		return false;
	}

	let set1 = new Set(word1);
	let set2 = new Set(word2);
	if (!(set1.isSupersetOf(set2) && set2.isSubsetOf(set1))) {
		return false;
	}

	let letters1Map = new Map();
	for (let l of word1) {
		let count = 1;
		if (letters1Map.has(l)) {
			count = letters1Map.get(l);
			count++;
		}
		letters1Map.set(l, count);
	}
	let letters2Map = new Map();
	for (let l of word2) {
		let count = 1;
		if (letters2Map.has(l)) {
			count = letters2Map.get(l);
			count++;
		}
		letters2Map.set(l, count);
	}

	if (letters1Map.size !== letters2Map.size) {
		return false;
	}

	let values1 = [...letters1Map.values()].sort((a, b) => a - b);
	let values2 = [...letters2Map.values()].sort((a, b) => a - b);

	for (let i = 0; i < values1.length; i++) {
		if (values1[i] !== values2[i]) {
			return false;
		}
	}

	return true;
};


console.log(closeStrings("abc", "bca"));
// expected: true
console.log('-------------------------------------------------------');

console.log(closeStrings("a", "aa"));
// expected: false
console.log('-------------------------------------------------------');

console.log(closeStrings("cabbba", "abbccc"));
// expected: true
console.log('-------------------------------------------------------');

console.log(closeStrings("abbbzcf", "babzzcz"));
// expected: true
console.log('-------------------------------------------------------');

console.log(closeStrings("abbzzca", "babzzcz"));
// expected: true
console.log('-------------------------------------------------------');

