// LeetCode 75: Hash Map / Set
// #2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";

/**
 * @param {number[][]} grid
 * @return {number}
 */
function equalPairs(grid) {
	let pairs = 0;
	let rowMap = new Map();
	let colMap = new Map();
	for (let i = 0; i < grid.length; i++) {
		let row = grid[i][0].toString();
		let col = grid[0][i].toString();
		for (let j = 1; j < grid.length; j++) {
			row += '|' + grid[i][j].toString();
			col += '|' + grid[j][i].toString();
		}
		let rowCount = 1;
		let colCount = 1;
		if (rowMap.has(row)) {
			rowCount += rowMap.get(row);
		}
		rowMap.set(row, rowCount);
		if (colMap.has(col)) {
			colCount += colMap.get(col);
		}
		colMap.set(col, colCount);
	}
	for (let row of rowMap.keys()) {
		if (colMap.has(row)) {
			pairs += rowMap.get(row) * colMap.get(row);
		}
	}
	return pairs;
};


console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]));
// expected: 1
console.log('-------------------------------------------------------');

console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]));
// expected: 3
console.log('-------------------------------------------------------');

console.log(equalPairs([[13, 13], [13, 13]]));
// expected: 4
console.log('-------------------------------------------------------');

console.log(equalPairs( [[2,1],[1,34]]));
// expected: 2
console.log('-------------------------------------------------------');

