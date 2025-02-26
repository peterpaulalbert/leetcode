console.log(maxAbsoluteSum([1, -3, 2, 3, -4])); // expected: 5
console.log('-------------------------------------------------------')
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2])); // expected: 8
console.log('-------------------------------------------------------')


/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAbsoluteSum(nums) {
	let maxAbsoluteValueSum = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let l = 1; l <= nums.length - i; l++) {
			let subarray = nums.slice(i, i + l);
			//console.log(subarray);

			let sum = 0;
			for (let e of subarray) {
				sum += e;
			}

			if (Math.abs(sum) > maxAbsoluteValueSum) {
				maxAbsoluteValueSum = Math.abs(sum);
			}
		}
	}

	return maxAbsoluteValueSum;

};