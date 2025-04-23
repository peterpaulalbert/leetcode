// Daily Question: 2025-04-23
// #1399. Count Largest Group
// https://leetcode.com/problems/count-largest-group/description/?envType=daily-question&envId=2025-04-23


"use strict"


/**
 * @param {number} n
 * @return {number}
 */
function countLargestGroup(n) {
	let sumMap = new Map();
	for (let i = 1; i <= n; i++) {
		let size = [...i.toString()].reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
		//console.log(`i: ${i}, size: ${size}`)
		if (sumMap.has(size)) {
			sumMap.get(size).push(i);
		}
		else {
			sumMap.set(size, [i]);
		}
	}

	let sizeMap = new Map();
	for (let s of sumMap.values()) {
		if (sizeMap.has(s.length)) {
			sizeMap.set(s.length, 1 + sizeMap.get(s.length));
		}
		else {
			sizeMap.set(s.length, 1);
		}
	}

	let maxSize = 0;
	let numMaxSize = 0;
	for (let s of sizeMap.keys()) {
		if (s > maxSize) {
			maxSize = s;
			numMaxSize = sizeMap.get(s);
		}
	}
	return numMaxSize;
};



console.log(countLargestGroup(13));
// expected: 4
console.log('-------------------------------------------------------');

console.log(countLargestGroup(2));
// expected: 2
console.log('-------------------------------------------------------');

