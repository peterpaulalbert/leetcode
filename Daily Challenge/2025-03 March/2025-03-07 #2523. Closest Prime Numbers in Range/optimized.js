// followed optimized loops by @Naveen_sachan
// https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/6507120/closest-prime-numbers-in-range-js-beats-99-highly-optimised-easy-to-understand/?envType=daily-question&envId=2025-03-07

console.log(closestPrimes(10, 19)); // expected: [11,13]
console.log('-------------------------------------------------------')
console.log(closestPrimes(4, 6)); // expected: [-1,-1]
console.log('-------------------------------------------------------')
console.log(closestPrimes(19, 31)); // expected: [29,31]
console.log('-------------------------------------------------------')
console.log(closestPrimes(12854, 130337)); // expected: [12917,12919]
console.log('-------------------------------------------------------')


/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function closestPrimes (left, right) {
	const N = 1e6 + 1; // 10^6 + 1
	const isPrime = new Array(N).fill(true);
	isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime
    
	// **Step 1: Use Sieve of Eratosthenes to mark non-prime numbers**
	for (let i = 2; i * i < N; i++) {
	    if (isPrime[i]) {
		for (let j = i * i; j < N; j += i) {
		    isPrime[j] = false;
		}
	    }
	}
    
	// **Step 2: Collect primes in the given range**
	const primes = [];
	for (let i = Math.max(left, 2); i <= right; i++) {
	    if (isPrime[i]) primes.push(i);
	}
    
	// **Step 3: Find the closest prime pair**
	if (primes.length < 2) return [-1, -1];
    
	let minDiff = Infinity, res = [-1, -1];
	for (let i = 1; i < primes.length; i++) {
	    let diff = primes[i] - primes[i - 1];
	    if (diff < minDiff) {
		minDiff = diff;
		res = [primes[i - 1], primes[i]];
	    }
	}
    
	return res;
};