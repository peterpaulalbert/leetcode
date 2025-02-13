console.log(minOperations([2, 11, 10, 1, 3], 10)); // expected: 2
console.log('-------------------------------------------------------')
console.log(minOperations([1, 1, 2, 4, 9], 20)); // expected: 4
console.log('-------------------------------------------------------')
console.log(minOperations([42, 46], 42)); // expected: 4
console.log('-------------------------------------------------------')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
	let operations = 0;

	let allGteK = true;
	for (num of nums) {
		if (num < k) {
			allGteK = false;
		}
	}

	while (!allGteK) {
		let min1 = Number.MAX_SAFE_INTEGER;
		let min2 = Number.MAX_SAFE_INTEGER;
		let minIndex1 = -1;
		let minIndex2 = -1;
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] < min1) {
				min1 = nums[i];
				minIndex1 = i;
			}
		}
		nums.splice(minIndex1, 1);
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] < min2) {
				min2 = nums[i];
				minIndex2 = i;
			}
		}
		nums.splice(minIndex2, 1);

		nums.push(min1 * 2 + min2);

		allGteK = true;
		for (num of nums) {
			if (num < k) {
				allGteK = false;
			}
		}

		operations++;
	}
	

	return operations;
};