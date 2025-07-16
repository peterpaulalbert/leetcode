// Daily Question: 2025-07-15
// #3136. Valid Word
// https://leetcode.com/problems/valid-word/description/?envType=daily-question&envId=2025-07-15



"use strict"

/**
 * @param {string} word
 * @return {boolean}
 */
function isValid(word) {
	if (word.length < 3) {
		return false;
	}

	let hasVowel = false;
	let hasConsonant = false;
	for (let i = 0; i < word.length; i++) {
		let isVowel = true;
		let isConsonant = true;
		let isDigit = true;
		if (word[i].search(/[0-9]/) === -1) {
			isDigit = false;
		}
		if (word[i].search(/[aeiou]/i) === -1) {
			isVowel = false;
		}
		else {
			hasVowel = true;
		}

		if (word[i].search(/[bcdfghjklmnpqrstvwxyz]/i) === -1) {
			isConsonant = false;
		}
		else {
			hasConsonant = true;
		}

		if (!isDigit && !isVowel && !isConsonant) {
			return false;
		}
	}
	if (!hasVowel || !hasConsonant) {
		return false;
	}
	return true;
};


// console.log(isValid("234Adas"));
// // expected: true
// console.log('-------------------------------------------------------');

// console.log(isValid("b3"));
// // expected: false
// console.log('-------------------------------------------------------');

// console.log(isValid("a3$e"));
// // expected: false
// console.log('-------------------------------------------------------');

// console.log(isValid("Ya$"));
// // expected: false
// console.log('-------------------------------------------------------');

console.log(isValid("3pp"));
// expected: true
console.log('-------------------------------------------------------');

console.log(isValid("CZ01ZCpzpZ1mBB3537C5"));
// expected: false
console.log('-------------------------------------------------------');

console.log(isValid("Uu1I5eOe6uIa8UoIaeae"));
// expected: false
console.log('-------------------------------------------------------');

