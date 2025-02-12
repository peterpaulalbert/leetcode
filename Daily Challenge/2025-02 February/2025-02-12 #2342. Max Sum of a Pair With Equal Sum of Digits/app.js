console.log(maximumSum([18, 43, 36, 13, 7])); // expected: 54
console.log('-------------------------------------------------------')
console.log(maximumSum([10, 12, 19, 14])); // expected: -1
console.log('-------------------------------------------------------')
console.log(maximumSum([4,6,10,6])); // expected: -1
console.log('-------------------------------------------------------')


/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumSum(nums) {
	let indexesBySum = new Map();
	for (let i = 0; i < nums.length; i++) {
		let numString = nums[i].toString();
		let sum = 0;
		for (let j = 0; j < numString.length; j++) {
			sum += parseInt(numString.charAt(j));
		}
		if(indexesBySum.has(sum)){
			indexesBySum.get(sum).push(i);
		}
		else{
			indexesBySum.set(sum, [i]);
		}
	}

	let maxSum = -1;
	for(let [key, value] of indexesBySum){
		if(value.length >= 2){
			let max1 = 0;
			let max2 = 0;
			let max1index;
			for(let index of value){
				if(nums[index] > max1){
					max1 = nums[index];
					max1index = index;
				}
			}
			for(let index of value){
				if(nums[index] > max2 && index !== max1index){
					max2 = nums[index];
				}
			}

			console.log(`max1=${max1}, max2=${max2}, sum=${max1+max2}`);
			if(max1 + max2 > maxSum){
				maxSum = max1 + max2
			}
		}
	}

	return maxSum;
};