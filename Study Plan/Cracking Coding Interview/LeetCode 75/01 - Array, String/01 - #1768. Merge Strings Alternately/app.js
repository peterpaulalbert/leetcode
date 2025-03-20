// LeetCode 75: Array / String
// #1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
	let merged = "";
	for (i = 0; i < Math.max(word1.length, word2.length); i++) {
		if (i < word1.length) {
			merged += word1[i];
		}
		if (i < word2.length) {
			merged += word2[i];
		}
	}
	return merged;
};


console.log(mergeAlternately("abc", "pqr"));
// expected: "apbqcr"
console.log('-------------------------------------------------------')

console.log(mergeAlternately("ab", "pqr"));
// expected: "apbqr"
console.log('-------------------------------------------------------')

console.log(mergeAlternately("abcd", "pq"));
// expected: "apbqcd"
console.log('-------------------------------------------------------')

