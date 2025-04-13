// Daily Question: 2025-04-13
// #1922. Count Good Numbers
// https://leetcode.com/problems/count-good-numbers/description/?envType=daily-question&envId=2025-04-13


/**
 * @param {number} n
 * @return {number}
 */
function countGoodNumbers(n) {
	let count = 0;
	for (let i = 0; i < 10 ** n; i++) {
		let numString = i.toString().padStart(n, '0');
		let goodOdd = true;
		let goodEven = true;
		for (let j = 0; j < n; j++) {
			if (j % 2 === 0) {
				if (['0', '2', '4', '6', '8'].findIndex((element) => element === numString[j]) === -1) {
					goodEven = false;
				}
			}
			else {
				if (['2', '3', '5', '7'].findIndex((element) => element === numString[j]) === -1) {
					goodOdd = false;
				}
			}
		}
		if (goodOdd && goodEven) {
			count++;
		}

	}

	return count % (10 ** 9 + 7);
};


console.log(countGoodNumbers(1));
// expected: 5
console.log('-------------------------------------------------------');

console.log(countGoodNumbers(4));
// expected: 400
console.log('-------------------------------------------------------');

console.log(countGoodNumbers(50));
// expected: 564908303
console.log('-------------------------------------------------------');

