// LeetCode 75: Array / String
// #605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
	let available = 0;
	for (let i = 0; i < flowerbed.length; i++) {
		if (
			(i === 0 || flowerbed[i - 1] === 0) &&
			flowerbed[i] === 0 &&
			(i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
		) {
			available++;
			flowerbed[i] = 1;
		}
	}
	return available >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// expected: true
console.log('-------------------------------------------------------')

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
// expected: false
console.log('-------------------------------------------------------')

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
// expected: false
console.log('-------------------------------------------------------')
