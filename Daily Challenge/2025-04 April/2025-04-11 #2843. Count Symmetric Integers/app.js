// Daily Question: 2025-04-11
// #2843. Count Symmetric Integers
// https://leetcode.com/problems/count-symmetric-integers/description/?envType=daily-question&envId=2025-04-11


/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countSymmetricIntegers(low, high) {
	let count = 0;
	for (let i = low; i <= high; i++) {
		let text = i.toString();
		if (text.length % 2 === 1) {
			continue; // skip odd digit lengths
		}

		let n = text.length / 2;
		let left = 0;
		let right = 0;
		for (let j = 0; j < n; j++) {
			left += parseInt(text[j]);
			right += parseInt(text[n + j]);
		}
		if(left === right){
			count++;
		}

	}
	return count;
};


console.log(countSymmetricIntegers(1, 100));
// expected: 9
console.log('-------------------------------------------------------');

console.log(countSymmetricIntegers(1200, 1230));
// expected: 4
console.log('-------------------------------------------------------');

