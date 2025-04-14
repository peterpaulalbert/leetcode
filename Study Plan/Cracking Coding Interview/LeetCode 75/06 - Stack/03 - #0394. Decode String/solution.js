// LeetCode 75: Stack
// #0394. Decode String
// https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75


"use strict";

/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
	let decoded = '';
	let stack = [];
	stack.push(s[0]);
	for (let i = 1; i < s.length; i++) {
		if (s[i] !== ']') {
			stack.push(s[i]);
		}
		else {
			let top = '';
			let pattern = '';
			let partial = '';
			while (true) {
				top = stack.pop();
				if (top !== '[') {
					pattern = top + pattern;
				}
				else {
					break;
				}
			}
			let multiple = 0;
			while (true) {
				top = stack.pop();
				partial = top + partial;
				if (Number.isInteger(parseInt(stack.at(-1)))) {
					continue;
				}
				else {
					multiple = parseInt(partial);
					break;
				}
			}

			partial = '';
			for (let j = 0; j < multiple; j++) {
				partial = pattern + partial;
			}
			stack.push(partial);
		}
	}
	return stack.join('');
};


console.log(decodeString("30[a]20[bc]"));
// expected: "aaabcbc"
console.log('-------------------------------------------------------');

console.log(decodeString("3[a2[c]]"));
// expected: "acccaccac"
console.log('-------------------------------------------------------');

console.log(decodeString("2[abc]3[cd]ef"));
// expected: "abcabccdcdcdef"
console.log('-------------------------------------------------------');

console.log(decodeString("100[leetcode]"));
// expected: "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode"
console.log('-------------------------------------------------------');

