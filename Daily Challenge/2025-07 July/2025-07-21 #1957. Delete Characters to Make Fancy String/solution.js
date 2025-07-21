// Daily Question: 2025-07-21
// #1957. Delete Characters to Make Fancy String
// https://leetcode.com/problems/delete-characters-to-make-fancy-string/?envType=daily-question&envId=2025-07-21



"use strict"

/**
 * @param {string} s
 * @return {string}
 */
function makeFancyString(s) {
	if (s.length < 2) {
		return s;
	}

	let output = s.substring(0, 2);
	for (let i = 2; i < s.length; i++) {
		if (s[i] === s[i - 1] && s[i - 1] === s[i - 2]) {
			continue;
		}
		else {
			output += s[i];
		}
	}

	return output;
};



console.log(makeFancyString("leeetcode"));
// expected: leetcode
console.log('-------------------------------------------------------');

console.log(makeFancyString("aaabaaaa"));
// expected: aabaa
console.log('-------------------------------------------------------');

console.log(makeFancyString("aab"));
// expected: aab
console.log('-------------------------------------------------------');




console.log(makeFancyString("leeetcodeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddd"));
// expected: leetcodeedd
console.log('-------------------------------------------------------');

console.log(makeFancyString("aaabaaaahgdkjzgfbdsjlhzvbldjfvhjjjjjjjjjjjjjjjjjjjjjjjjjgzzzzzzzzzzzzzzzzzzzzzzcbvhgvhgvkhgkvhgvkhgvhgkvkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkvvvvvvvvvvvvvvvvvvvvvvvvvvvvggggggggggggggggggffffffffffffffffffffffdddddddddddddddddddddddddddffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggccccccccccccccccccccccccfffffffffffffffffffffdddddddddddddddfgjdhdhgfghfhjgfjhgfhgfhgggggggggggggggggggggggggggggggggggffdddddddddddddxcccccccccccccccccccccxxxxxxxxxxxxxxxxxxxxxxxxxxxxxzzzzzzzzzzzzzzzzzzzzzzzzsssssssssssssssssssssssssswwwwwwwwwwwwwwwwwdfffdfdgfdgfdgfghfhgfhgfhghgfhgfhghgfhghfhgfhgfhgfgfhgfhgfhgfhghfhgfhgfhghfhgfjhjfhjgfjhgfjhgjfcjgfcjgfxjgxdfdfxgcvvcxvcxvcxdxfdxfgdgfdcgfhgfhgvhg"));
// expected: aabaahgdkjzgfbdsjlhzvbldjfvhjjgzzcbvhgvhgvkhgkvhgvkhgvhgkvkkvvggffddffggccffddfgjdhdhgfghfhjgfjhgfhgfhggffddxccxxzzsswwdffdfdgfdgfdgfghfhgfhgfhghgfhgfhghgfhghfhgfhgfhgfgfhgfhgfhgfhghfhgfhgfhghfhgfjhjfhjgfjhgfjhgjfcjgfcjgfxjgxdfdfxgcvvcxvcxvcxdxfdxfgdgfdcgfhgfhgvhg
console.log('-------------------------------------------------------');

console.log(makeFancyString("a"));
// expected: a
console.log('-------------------------------------------------------');

