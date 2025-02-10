console.log(check([3, 4, 5, 1, 2])); // expected: true
console.log('-------------------------------------------------------')
console.log(check([2, 1, 3, 4])); // expected: false
console.log('-------------------------------------------------------')
console.log(check([1, 2, 3])); // expected: true	
console.log('-------------------------------------------------------')
console.log(check([1, 1, 1])); // expected: true	


/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
	for (let i = 0; i < nums.length; i++) {
		console.log(`i: ${i}`);

		let round = [];
		for (let j = 0; j < nums.length - 1; j++) {

			console.log(`left: ${nums[(i + j) % nums.length]}; right: ${nums[(i + j + 1) % nums.length]}, comparison: ${nums[(i + j) % nums.length] <= nums[(i + j + 1) % nums.length]}`);

			if (nums[(i + j) % nums.length] <= nums[(i + j + 1) % nums.length]) {
				round.push(true);
			}
			else {
				round.push(false);
			}
		}

		let t = 0;
		for (e of round) {
			if (e) {
				t++;
			}
		}
		if (t === round.length) {
			return true
		}
	}

	return false;
};