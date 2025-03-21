// LeetCode 75: Array / String
// #1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
	let cd = 0;
	if(str1.length > str2.length && str1.length % str2.length === 0){
		cd = str2.length;
	}
	else if(str2.length > str1.length && str2.length % str1.length === 0){
		cd = str1.length;
	}
	else{
		cd = gcd(str1.length, str2.length, 1);
	}

	let sd = str1.slice(0, cd);
	let match = true;
	
	for (let i = 0; i < str1.length / cd; i++) {
		if (sd !== str1.slice(cd * i, cd * i + cd)) {
			match = false;
			return "";		}
	}
	for (let i = 0; i < str2.length / cd; i++) {
		if (sd !== str2.slice(cd * i, cd * i + cd)) {
			match = false;
			return "";		}
	}

	return sd;
};

function gcd(a, b, n) {
	if (n <= 0) return 0;
	if (n > (a < b ? a : b) || a <= 1 || b <= 1) return 1;
	else if (a % n == 0 && b % n == 0) return n * gcd(a / n, b / n, n + 1);
	else return gcd(a, b, n + 1);
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
