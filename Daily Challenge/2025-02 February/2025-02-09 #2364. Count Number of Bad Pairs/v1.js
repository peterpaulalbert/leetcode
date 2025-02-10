console.log(countBadPairs([4, 1, 3, 3])); // expected: 5
console.log('-------------------------------------------------------')
console.log(countBadPairs([1, 2, 3, 4, 5])); // expected: 0
console.log('-------------------------------------------------------')

/**
 * @param {number[]} nums
 * @return {number}
 */
function countBadPairs(nums) {
	let badPairs = 0

	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (j - i != nums[j] - nums[i]) {
				badPairs++;
			}
		}
	}

	return badPairs;
};