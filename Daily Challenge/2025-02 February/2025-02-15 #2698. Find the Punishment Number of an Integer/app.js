console.log(punishmentNumber(10)); // expected: 182
console.log('-------------------------------------------------------')
console.log(punishmentNumber(37)); // expected: 1478
console.log('-------------------------------------------------------')


/**
 * @param {number} n
 * @return {number}
 */
function punishmentNumber(n) {
	const equalsPartitionsSum = [1, 9, 10, 36, 45, 55, 82, 91, 99, 100, 235, 297, 369, 370, 379, 414, 657, 675, 703, 756, 792, 909, 918, 945, 964, 990, 991, 999, 1000];
	let sum = 0;
	for(i of equalsPartitionsSum){
		if(i <= n){
			sum += i*i;
		}
	}
	return sum;
};