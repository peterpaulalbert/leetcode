// followed dynamic programming solution #dhairyabahl
// https://leetcode.com/problems/shortest-common-supersequence/solutions/1440589/javascript-dynamic-programming-solution-scfod/

console.log(shortestCommonSupersequence('abac', 'cab')); // expected: 'cabac'
console.log('-------------------------------------------------------')
console.log(shortestCommonSupersequence('aaaaaaaa', 'aaaaaaaa')); // expected: 'aaaaaaaa'
console.log('-------------------------------------------------------')


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function shortestCommonSupersequence(str1, str2) {
	let dp = [];
	for (let rctr = 0; rctr <= str1.length; rctr++) {
		let arr = [];
		for (let cctr = 0; cctr <= str2.length; cctr++){
			arr.push(0)
		};
		dp.push(arr);
	}

	for (let row = 1; row <= str1.length; row++){
		for (let col = 1; col <= str2.length; col++) {
			if (str1[row - 1] === str2[col - 1]){
				dp[row][col] = 1 + dp[row - 1][col - 1];
			}
			else{
				dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
			}

		}
	}
	let row = str1.length, col = str2.length;
	let ans = "";

	while (row > 0 && col > 0) {
		if (str1[row - 1] === str2[col - 1]) {
			ans += str1[row - 1];
			row -= 1;
			col -= 1;
			continue;
		}

		if (dp[row - 1][col] > dp[row][col - 1]) {
			ans += str1[row - 1];
			row -= 1;
		}
		else {
			ans += str2[col - 1]
			col -= 1
		}
	}

	while (row > 0) {
		ans += str1[row - 1]
		row -= 1;
	}

	while (col > 0) {
		ans += str2[col - 1];
		col -= 1;
	}

	ans = ans.split("");
	ans = ans.reverse()
	ans = ans.join("");
	return ans;

};