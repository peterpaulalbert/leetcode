// Daily Question: 2025-04-14 
// #1534. Count Good Triplets
// https://leetcode.com/problems/count-good-triplets/?envType=daily-question&envId=2025-04-14


/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function countGoodTriplets(arr, a, b, c) {
	let goodTriplets = 0;
	for (let i = 0; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (
					Math.abs(arr[i] - arr[j]) <= a &&
					Math.abs(arr[j] - arr[k]) <= b &&
					Math.abs(arr[i] - arr[k]) <= c
				) {
					goodTriplets++;
				}
			}
		}
	}
	return goodTriplets;
};


console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
// expected: 4
console.log('-------------------------------------------------------');

console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));
// expected: 0
console.log('-------------------------------------------------------');

