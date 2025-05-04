// Daily Question: 2025-05-04
// #1128. Number of Equivalent Domino Pairs
// https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/?envType=daily-question&envId=2025-05-04


"use strict"


/**
 * @param {number[][]} dominoes
 * @return {number}
 */
function numEquivDominoPairs(dominoes) {
	let pairs = 0;
	let pairMap = new Map();
	for (let i = 0; i < dominoes.length; i++) {
		let domino = '';
		if (dominoes[i][0] > dominoes[i][1]) {
			domino = dominoes[i][1].toString() + dominoes[i][0].toString();
		}
		else {
			domino = dominoes[i][0].toString() + dominoes[i][1].toString();
		}
		let count = 1;
		if (pairMap.has(domino)) {
			count = 1 + pairMap.get(domino);
		}
		pairMap.set(domino, count);
	}
	for (let key of pairMap.keys()) {
		let value = pairMap.get(key);
		if (value > 1) {
			pairs += (value * (value - 1)) / 2;
		}
	}

	return pairs;
};


console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]));
// expected: 1
console.log('-------------------------------------------------------');

console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]));
// expected: 3
console.log('-------------------------------------------------------');

console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 2], [1, 2]]));
// expected: 6
console.log('-------------------------------------------------------');

console.log(numEquivDominoPairs([[1, 2], [2, 3], [3, 4], [4, 5]]));
// expected: 0
console.log('-------------------------------------------------------');

console.log(numEquivDominoPairs([[1, 2], [2, 1], [2, 1], [1, 2], [3, 3], [3, 3]]));
// expected: 7
console.log('-------------------------------------------------------');

console.log(numEquivDominoPairs([[1, 2]]));
// expected: 0
console.log('-------------------------------------------------------');