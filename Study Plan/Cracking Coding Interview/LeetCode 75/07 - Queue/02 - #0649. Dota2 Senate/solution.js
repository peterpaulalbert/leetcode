// LeetCode 75: Queue
// #0649. Dota2 Senate
// https://leetcode.com/problems/dota2-senate/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
	let senators = [...senate];
	let senator = '';
	while (true) {
		senator = senators.shift();
		let veto = '';
		if(senator === 'R'){
			veto = 'D';
		}
		else{
			veto = 'R';
		}
		let i = senators.findIndex((element) => element === veto);
		if(i >= 0){
			senators.splice(i, 1);
			senators.push(senator);
			continue;
		}
		else{
			break;
		}
	}

	return senator === 'R' ? 'Radiant' : 'Dire';
};


console.log(predictPartyVictory("RD"));
// expected: "Radiant"
console.log('-------------------------------------------------------');

console.log(predictPartyVictory("RDD"));
// expected: "Dire"
console.log('-------------------------------------------------------');

console.log(predictPartyVictory("DDRRR"));
// expected: "Dire"
console.log('-------------------------------------------------------');

console.log(predictPartyVictory("DRRDRDRDRDDRDRDR"));
// expected: "Dire"
console.log('-------------------------------------------------------');

