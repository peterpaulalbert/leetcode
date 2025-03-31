// LeetCode 75: Two Pointers
// #11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
	let left = 0;
	let right = height.length - 1;
	let maximumArea = 0;
	let area = 0;
	while (right - left >= 1) {
		area = Math.min(height[left], height[right]) * (right - left);
		if(area > maximumArea){
			maximumArea = area;
		}
		if(height[left] > height[right]){
			right--;
		}
		else{
			left++;
		}

	}
	return maximumArea;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// expected: 49
console.log('-------------------------------------------------------');

console.log(maxArea([1, 1]));
// expected: 1
console.log('-------------------------------------------------------');

console.log(maxArea([1, 1, 1, 99, 99, 1, 1, 1]));
// expected: 1
console.log('-------------------------------------------------------');

