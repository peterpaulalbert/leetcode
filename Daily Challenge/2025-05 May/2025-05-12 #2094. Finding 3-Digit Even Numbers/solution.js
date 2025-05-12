// Daily Question: 2025-05-12
// #2094. Finding 3-Digit Even Numbers
// https://leetcode.com/problems/finding-3-digit-even-numbers/description/?envType=daily-question&envId=2025-05-12


"use strict"


/**
 * @param {number[]} digits
 * @return {number[]}
 */
function findEvenNumbers(digits) {
	let output = [];
	let digitsMap = new Map();
	let maxDigit = 0;
	for (let e of digits) {
		let freq = 1;
		if (digitsMap.has(e)) {
			freq = 1 + digitsMap.get(e);
		}
		digitsMap.set(e, freq);

		if (e > maxDigit) {
			maxDigit = e;
		}
	}

	for (let i = 100; i < (maxDigit + 1) * 100; i++) {
		if(i%2===1){
			continue;
		}
		let valuesMap = new Map();
		for (let e of [...i.toString()]) {
			let v = parseInt(e);
			let freq = 1;
			if (valuesMap.has(v)) {
				freq = 1 + valuesMap.get(v);
			}
			valuesMap.set(v, freq);
		}

		let passed = true;
		for(let k of valuesMap.keys()){
			if(!digitsMap.has(k) || digitsMap.get(k) < valuesMap.get(k)){
				passed = false;
			}
		}
		if(passed){
			output.push(i);
		}


	}

	return output;
};

console.log(findEvenNumbers([2, 1, 3, 0]));
// expected: [102,120,130,132,210,230,302,310,312,320]
console.log('-------------------------------------------------------');

console.log(findEvenNumbers([2, 2, 8, 8, 2]));
// expected: [222,228,282,288,822,828,882]
console.log('-------------------------------------------------------');

console.log(findEvenNumbers([3, 7, 5]));
// expected: []
console.log('-------------------------------------------------------');
