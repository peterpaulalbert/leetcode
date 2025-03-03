console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); // expected: [9,5,3,10,10,12,14]
console.log('-------------------------------------------------------')
console.log(pivotArray([-3, 4, 3, 2], 2)); // expected: [-3,2,4,3]
console.log('-------------------------------------------------------')

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
function pivotArray(nums, pivot) {
	let before = [];
	let equal = [];
	let after = [];

	for (let i = 0; i < nums.length; i++) {
		if(nums[i] < pivot){
			before.push(nums[i]);
		}
		else if(nums[i] > pivot){
			after.push(nums[i]);
		}
		else {
			equal.push(nums[i]);
		}
	}

	return [...before, ...equal, ...after];
};