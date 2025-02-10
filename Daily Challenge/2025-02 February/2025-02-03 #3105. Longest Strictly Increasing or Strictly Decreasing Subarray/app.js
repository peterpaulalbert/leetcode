console.log(longestMonotonicSubarray([1,4,3,3,2])); // expected: 2
console.log('-------------------------------------------------------')
console.log(longestMonotonicSubarray([3,3,3,3])); // expected: 1
console.log('-------------------------------------------------------')
console.log(longestMonotonicSubarray([3,2,1])); // expected: 3	
console.log('-------------------------------------------------------')
console.log(longestMonotonicSubarray([1, 1, 5])); // expected: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
function longestMonotonicSubarray(nums) {
	for (let j = nums.length; j >= 1; j--) {
		for (let i = 0; i + j <= nums.length; i++) {
			let subarray = nums.slice(i, i+j);
			if (isMonotonic(subarray)) {
				return subarray.length;
			}

		}
	}
	return 1;
};

function isMonotonic(subarray) {
	if (subarray.length === 1) {
		return true;
	}

	let pairs = [];
	for (let i = 0; i < subarray.length - 1; i++) {
		if (subarray[i] === subarray[i + 1]) {
			pairs.push(null);
		}
		else if (subarray[i] < subarray[i + 1]) {
			pairs.push(true);
		}
		else {
			pairs.push(false)
		}
	}

	let trues = 0;
	let falses = 0;
	for (let i = 0; i < pairs.length; i++) {
		if (pairs[i] === null) {
			//noop
		}
		else if (pairs[i]) {
			trues++;
		}
		else {
			falses++;
		}
	}
	if (trues === pairs.length || falses === pairs.length) {
		return true;
	}
	else {
		return false;
	}
}