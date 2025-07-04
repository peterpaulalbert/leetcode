// Daily Question: 2025-07-03
// #3304. Find the K-th Character in String Game I
// https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/?envType=daily-question&envId=2025-07-03



"use strict"

/**
 * @param {number} k
 * @return {character}
 */
function kthCharacter(k) {
	let word = "a";
	while (true) {
		let newWord = word;
		for (let i = 0; i < word.length; i++) {
			if (word[i] === "z") {
				newWord += "a";
			}
			else {
				newWord += String.fromCharCode(word.charCodeAt(i) + 1);
			}
		}
		word = newWord;

		if (word.length >= k) {
			return word[k - 1];
		}
	}
};


console.log(kthCharacter(5));
// expected: "b"
console.log('-------------------------------------------------------');

console.log(kthCharacter(10));
// expected: "c"
console.log('-------------------------------------------------------');
