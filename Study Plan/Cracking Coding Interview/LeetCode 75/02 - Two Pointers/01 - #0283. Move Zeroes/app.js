// LeetCode 75: Two Pointers
// #283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
	for (let i = nums.length - 1; i >= 0; i--) {
		if(nums[i]===0){
			nums.splice(i, 1);
			nums.push(0);
		}
	}
};


let nums;

nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
// expected: [1,3,12,0,0]
console.log('-------------------------------------------------------');

nums = [0];
moveZeroes(nums);
console.log(nums);
// expected: [0]
console.log('-------------------------------------------------------');

