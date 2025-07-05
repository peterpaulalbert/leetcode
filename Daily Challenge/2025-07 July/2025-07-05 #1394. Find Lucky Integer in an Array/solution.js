// Daily Question: 2025-07-05
// #1394. Find Lucky Integer in an Array
// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/?envType=daily-question&envId=2025-07-05



"use strict"

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
	let numMap = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (numMap.has(arr[i])) {
			numMap.set(arr[i], numMap.get(arr[i]) + 1);
		}
		else {
			numMap.set(arr[i], 1);
		}
	}

	let maxLuckyNum = -1;
	for (let key of numMap.keys()) {
		if(key === numMap.get(key) && key > maxLuckyNum){
			maxLuckyNum = key;
		}
	}

	return maxLuckyNum;
};


console.log(findLucky([2, 2, 3, 4]));
// expected: 2
console.log('-------------------------------------------------------');

console.log(findLucky([1, 2, 2, 3, 3, 3]));
// expected: 3
console.log('-------------------------------------------------------');

console.log(findLucky([2, 2, 2, 3, 3]));
// expected: -1
console.log('-------------------------------------------------------');


console.log(findLucky([1,2,2,10,30,11,11,11,11,11,11,11,11,11,11,11]));
// expected: 11
console.log('-------------------------------------------------------');

console.log(findLucky([1,2,2,10,30,11,11,11,11,11,11,11,11,11,11]));
// expected: 2
console.log('-------------------------------------------------------');


