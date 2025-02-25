console.log(numOfSubarrays([1, 3, 5])); // expected: 4
console.log('-------------------------------------------------------')
console.log(numOfSubarrays([2, 4, 6])); // expected: 0
console.log('-------------------------------------------------------')

/**
 * @param {number[]} arr
 * @return {number}
 */
function numOfSubarrays(arr) {
	let oddSums = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let l = 1; l <= arr.length - i; l++) {
			let subarray = arr.slice(i, i+l);
			console.log(subarray);
			
			let sum = 0;
			for(let e of subarray){
				sum += e;
			}

			if(sum % 2 === 1){
				oddSums++;
			}
		}
	}

	return oddSums % 1000000007;
};
