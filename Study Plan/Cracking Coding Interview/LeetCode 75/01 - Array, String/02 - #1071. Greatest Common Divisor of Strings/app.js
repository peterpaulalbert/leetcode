// LeetCode 75: Array / String
// #1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
	for (let i = Math.min(str1.length, str2.length); i > 0; i--) {
		if (isDivisor(str1, str2, i)) {
			return str1.slice(0, i);
		}
	}
	return "";
};

function isDivisor(str1, str2, n) {
	if (str1.length % n !== 0 || str2.length % n !== 0) {
		return false;
	}
	if (str1.replaceAll(str1.slice(0, n), "") === "" && str2.replaceAll(str1.slice(0, n), "") === "") {
		return true;
	}
	else {
		return false;
	}

}


console.log(gcdOfStrings("ABCABC", "ABC"));
// expected: "ABC"
console.log('-------------------------------------------------------')

console.log(gcdOfStrings("ABABAB", "ABAB"));
// expected: "AB"
console.log('-------------------------------------------------------')

console.log(gcdOfStrings("LEET", "CODE"));
// expected: ""
console.log('-------------------------------------------------------')

console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"));
// expected: "TAUXX"
console.log('-------------------------------------------------------')

console.log(gcdOfStrings("ABABABAB", "ABAB"));
// expected: "ABAB"
console.log('-------------------------------------------------------')
