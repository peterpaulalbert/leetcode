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
function closestPrimes(left, right) {
	let isPrime = new Map();
	let primes = [];
	let output = [];
	for (let i = 2; i <= right; i++) {
		if (isPrime.get(i) === undefined) {
			isPrime.set(i, true);
			if(i >= left){
				primes.push(i);
			}
			for (let j = i + i; j <= right; j += i) {
				isPrime.set(j, false);
			}
		}
	}
	primes.sort((a,b)=>{return a-b});
	if (primes.length >= 2) {
		let difference = Number.MAX_SAFE_INTEGER;
		let minLeft = Number.MAX_SAFE_INTEGER;
		for (let i = primes.length - 1; i > 0; i--) {
			if(primes[i] - primes[i-1] <= difference && primes[i-1] < minLeft){
				difference = primes[i] - primes[i-1];
				minLeft = primes[i-1];
				output = [primes[i-1], primes[i]];
				//console.log(`i: ${i}, difference: ${difference}, minLeft: ${minLeft}, output: [${output[0]}, ${output[1]}]`);
			}
		}
		return output;
	}
	else {
		return [-1, -1];
	}

};