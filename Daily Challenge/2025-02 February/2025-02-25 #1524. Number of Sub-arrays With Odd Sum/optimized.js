// followed optimized looping by @NizamudheenC
// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/6464653/easy-to-understand-js-by-nizamudheenc-i72i/

console.log(numOfSubarrays([1, 3, 5])); // expected: 4
console.log('-------------------------------------------------------')
console.log(numOfSubarrays([2, 4, 6])); // expected: 0
console.log('-------------------------------------------------------')

/**
 * @param {number[]} arr
 * @return {number}
 */
function numOfSubarrays(arr) {
	let mod = 1000000007;
	let evenCount = 1;
	let oddCount = 0;
	let sum = 0;
	let result = 0;

	for (let e of arr) {
		sum += e;
		if (sum % 2 !== 0) {
			result = (result + evenCount) % mod;
			oddCount++;
		} 
		else {
			result = (result + oddCount) % mod;
			evenCount++;
		}
	}
	return result;
};