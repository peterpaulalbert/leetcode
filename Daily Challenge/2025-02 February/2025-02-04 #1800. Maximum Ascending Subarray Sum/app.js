console.log(`maxAscendingSum: ${ maxAscendingSum([10,20,30,5,10,50]) }`); // expected: 65
console.log('-------------------------------------------------------')
console.log(`maxAscendingSum: ${ maxAscendingSum([10,20,30,40,50]) }`); // expected: 150
console.log('-------------------------------------------------------')
console.log(`maxAscendingSum: ${ maxAscendingSum([12,17,15,13,10,11,12]) }`); // expected: 33
console.log('-------------------------------------------------------')
console.log(`maxAscendingSum: ${ maxAscendingSum([100,10,1]) }`); // expected: 100``
console.log('-------------------------------------------------------')



/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAscendingSum(nums) {
	let max = 0;
	for (let j = nums.length; j >= 1; j--) {
		let sum = 0;

		for (let i = 0; i + j <= nums.length; i++) {
			let subarray = nums.slice(i, i+j);
			if (isAscending(subarray)) {
				sum = 0;
				for(let k = 0; k < subarray.length; k++){
					sum += subarray[k];
				}
				console.log(`max=${max}; sum=${sum}; subarray=${subarray}`);
			}
			if(sum > max){
				max = sum;
			}
		}
	}
	return max;
};


function isAscending(subarray) {
	if (subarray.length === 1) {
		return true;
	}

	let trues = 0;
	for (let i = 0; i < subarray.length - 1; i++) {
		if (subarray[i] < subarray[i + 1]) {
			trues++;
		}
	}

	if (trues === subarray.length - 1) {
		return true;
	}
	else {
		return false;
	}
}