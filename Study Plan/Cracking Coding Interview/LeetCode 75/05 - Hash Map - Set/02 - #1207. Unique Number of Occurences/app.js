// LeetCode 75: Hash Map / Set
// #1207. Unique Number of Occurences
// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
	let elementMap = new Map();
	for(let e of arr){
		let c = 1;
		if(elementMap.has(e)){
			c += elementMap.get(e);
		}
		elementMap.set(e, c);
	}

	let occurrenceMap = new Map();
	for(let e of elementMap.values()){
		if(occurrenceMap.has(e)){
			return false;
		}
		occurrenceMap.set(e, 1);
	}
	return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
// expected: true
console.log('-------------------------------------------------------');

console.log(uniqueOccurrences([1, 2]));
// expected: false
console.log('-------------------------------------------------------');

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
// expected: true
console.log('-------------------------------------------------------');

