console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])); // expected: 5
console.log('-------------------------------------------------------')
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])); // expected: 3
console.log('-------------------------------------------------------')
console.log(lenLongestFibSubseq([1])); // expected: 1
console.log('-------------------------------------------------------')
console.log(lenLongestFibSubseq([])); // expected: 0
console.log('-------------------------------------------------------')

console.log(lenLongestFibSubseq([1,3,5])); // expected: 0
console.log('-------------------------------------------------------')


/**
 * @param {number[]} arr
 * @return {number}
 */
function lenLongestFibSubseq(nums) {
	if (nums.length < 2) {
		return 0;
	}

	let maxFibonacciSubsequence = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j<nums.length; j++){
			let previous = nums[i];
			let current = nums[j];
			let sum = current + previous;
			let fibsub = [previous, current];
			let lenFibonacciSubsequence = 0;
			if(nums.find(e => e === sum)){
				lenFibonacciSubsequence = 2;
			}
	
			while(nums.find(e => e === sum)){
				previous = current;
				current = sum;
				lenFibonacciSubsequence++;
				sum = current + previous;
				fibsub.push(sum);
	
			}
			
			
			console.log(`len: ${lenFibonacciSubsequence}, subseq: ${fibsub}`)
			if (lenFibonacciSubsequence > maxFibonacciSubsequence) {
				maxFibonacciSubsequence = lenFibonacciSubsequence;
			}
		}
	
	}

	return maxFibonacciSubsequence;

};