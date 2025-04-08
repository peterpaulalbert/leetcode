// LeetCode 75: Hash Map / Set
// #2215. Find the Difference of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
	let set1 = new Set(nums1);
	let set2 = new Set(nums2);

	let diff1 = [];
	for(let e of set1){
		if(!set2.has(e)){
			diff1.push(e);
		}
	}
	let diff2 = [];
	for(let e of set2){
		if(!set1.has(e)){
			diff2.push(e);
		}
	}

	return [diff1, diff2];    
};

console.log(JSON.stringify(findDifference([1,2,3], [2,4,6])));
// expected: [[1,3],[4,6]]
console.log('-------------------------------------------------------');

console.log(JSON.stringify(findDifference([1,2,3,3], [1,1,2,2])));
// expected: [[3],[]]
console.log('-------------------------------------------------------');

