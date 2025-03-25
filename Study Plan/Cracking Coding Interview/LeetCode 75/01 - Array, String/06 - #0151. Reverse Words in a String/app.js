// LeetCode 75: Array / String
// #151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
	let words = s.split(' ');
	let reversed = [];
	for (let i = words.length - 1; i >= 0; i--) {
		if (words[i] !== '') {
			reversed.push(words[i]);
		}
	}
	return reversed.join(' ');
};


console.log(reverseWords("the sky is blue"));
// expected: "blue is sky the"
console.log('-------------------------------------------------------')

console.log(reverseWords("  hello world  "));
// expected: "world hello"
console.log('-------------------------------------------------------')

console.log(reverseWords("a good   example"));
// expected: "example good a"
console.log('-------------------------------------------------------')
