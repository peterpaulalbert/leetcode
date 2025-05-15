// Daily Question: 2025-05-15
// #2900. Longest Unequal Adjacent Groups Subsequence I
// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/description/?envType=daily-question&envId=2025-05-15


"use strict"

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
function getLongestSubsequence(words, groups) {
	let subsequence = [];
	let group = groups[0];
	subsequence.push(words[0]);

	for (let i = 1; i < groups.length; i++) {
		if( groups[i] !== group){
			subsequence.push(words[i]);
			group = groups[i];
		}
	}

	return subsequence;
};


console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]));
// expected: ["e","b"]
console.log('-------------------------------------------------------');

console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]));
// expected: ["a","b","c"]
console.log('-------------------------------------------------------');

console.log(getLongestSubsequence(["a", "b", "c", "d", "e"], [1, 1, 1, 1, 1]));
console.log(getLongestSubsequence(["a", "b", "c", "d", "e"], [0, 0, 0, 0, 0]));
console.log(getLongestSubsequence(["f", "o", "l", "i", "v", "r", "a", "q", "z", "g", "p", "h", "n", "c", "y", "u", "e", "b", "k", "t", "w", "m", "x", "j", "s", "d"], [0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0]));
console.log(getLongestSubsequence(["zvedu", "lwdc", "hdzxskgolc", "riavnjtkkq", "rcjus", "lkdy", "t", "ogetdzwtp", "bxkr", "ul", "hql", "ajragiuuo", "n", "wve", "qrnsfj", "lxq", "kiiwtt", "ipaiguj", "dmp", "vgojlcy", "hl", "vhbylrhf", "utxz", "lc", "zg", "sny", "vkhd", "zwlzbzhuy", "e", "yay", "iuaz", "kulsuuksdi", "idzikb", "larthyyfrp", "tlzxb", "rxngmsw", "xyrbfmttf", "fgcehzw", "tksuk", "psngvcgjz", "alqrm", "bgfb", "fmbuv", "snprpzdees", "qlkofi", "yrdbyv", "y", "pnhxulzx", "yprndzrv", "yybcsdpivk", "xzljt", "tk", "anou", "tnzaszevuz", "iz", "cins", "lm", "g", "gap", "yrgowfrgv", "sawxnnnct", "unsaxygosz", "nsjlxxesm", "ujmav", "vj", "dam", "slnyvnzj", "eevhhnw", "gtqbbp", "krvzq", "memclrd", "gvwaaqrgz", "aigxxlhir", "vkbdo", "jazqnndx", "ttnai", "tkg", "iswjne", "scnr", "rm", "yjyr", "rvwo", "nvktima", "vwdqokabvb", "ahbmkhfim", "uvsvlvyvg", "rk", "ogqsoeywih", "v", "ccm", "fu", "crti", "bfvoapp", "d", "ayqulkg", "c", "vv", "qqkjaubnf", "pkhtth", "hdxmfxqpv"], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0]));
