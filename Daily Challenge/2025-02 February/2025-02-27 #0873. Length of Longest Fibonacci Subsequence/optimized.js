// followed optimized loops by @charnavoki
// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/6472348/brutal-force-short-and-clean-code/

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])); // expected: 5
console.log('-------------------------------------------------------')
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])); // expected: 3
console.log('-------------------------------------------------------')
console.log(lenLongestFibSubseq([1])); // expected: 1
console.log('-------------------------------------------------------')
console.log(lenLongestFibSubseq([])); // expected: 0
console.log('-------------------------------------------------------')
console.log(lenLongestFibSubseq([1, 3, 5])); // expected: 0
console.log('-------------------------------------------------------')


/**
 * @param {number[]} nums
 * @return {number}
 */
function lenLongestFibSubseq(nums) {
	const set = new Set(nums);
	let maxLength = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let a = nums[i], b = nums[j], len = 3; set.has(a + b); len++) {
				[a, b] = [b, a + b];
				maxLength = Math.max(maxLength, len);
			}
		}
	}
	return maxLength;
};