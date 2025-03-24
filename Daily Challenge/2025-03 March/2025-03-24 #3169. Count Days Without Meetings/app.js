// Daily Question: 2025-03-24
// #3169. Count Days Without Meetings
// https://leetcode.com/problems/count-days-without-meetings/description/?envType=daily-question&envId=2025-03-24


/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
function countDays(days, meetings) {
	let workdays = new Array(days).fill(0);
	let freedays = 0;
	for (let i = 0; i < meetings.length; i++) {
		for (let j = meetings[i][0]-1; j < meetings[i][1]; j++) {
			workdays[j] = 1;
		}
	}
	for (let i = 0; i < workdays.length; i++) {
		if (workdays[i] === 0) {
			freedays++;
		}
	}
	return freedays;
};



console.log(countDays(10, [[5, 7], [1, 3], [9, 10]]));
// expected: 2
console.log('-------------------------------------------------------')

console.log(countDays(5, [[2,4],[1,3]]));
//expected: 1
console.log('-------------------------------------------------------')

console.log(countDays(6, [[1,6]]));
// expected: 0
console.log('-------------------------------------------------------')
