// LeetCode 75: Array / String
// #345 Reverse Vowels of a String 
// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
	let sVowels = [];
	const vowels = ['a','e','i','o','u','A','E','I','O','U'];
	for(let i=0; i<s.length; i++){
		if(vowels.includes(s[i])){
			sVowels.push({index:i, letter: s[i]})
		}
	}
	const sArray = [...s];
	for(let i=0, j=sVowels.length-1; i<sVowels.length, j>=0; i++, j--){
		sArray[sVowels[j].index] = sVowels[i].letter;
	}
	return sArray.join('');

};

console.log(reverseVowels("IceCreAm"));
// expected: "AceCreIm"
console.log('-------------------------------------------------------')

console.log(reverseVowels("leetcode"));
// expected: "leotcede"
console.log('-------------------------------------------------------')
