/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
	if (nums.length === 1) {
	    return true;
	}
    
	for (let i = 0; i < nums.length - 1; i++) {
	    let left = (nums[i] % 2 == 0) ? 0 : 1;
	    let right = (nums[i + 1] % 2 == 0) ? 0 : 1;
	    if (left == right) {
		return false
	    }
	}
	return true;
    };