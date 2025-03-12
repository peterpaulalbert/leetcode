console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // expected: 3
console.log('-------------------------------------------------------')
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // expected: 3
console.log('-------------------------------------------------------')
console.log(maximumCount([5, 20, 66, 1314])); // expected: 4
console.log('-------------------------------------------------------')


/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
	let positives = 0;
	let negatives = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			positives++;
		}
		else if (nums[i] < 0) {
			negatives++;
		}
	}

	return Math.max(positives, negatives);
};