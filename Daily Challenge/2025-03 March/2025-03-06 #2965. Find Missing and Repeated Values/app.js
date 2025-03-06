console.log(findMissingAndRepeatedValues([[1,3],[2,2]])); // expected: [2,4]
console.log('-------------------------------------------------------')
console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]])); // expected: [9,5]
console.log('-------------------------------------------------------')


/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findMissingAndRepeatedValues(grid) {
	let values = new Map();
	let output = [];
	for(let i=0; i<grid.length; i++){
		for(let j=0; j<grid[i].length; j++){
			values.set(grid[i][j], (values.get(grid[i][j]) ?? 0) + 1);
		}
	}
	for(let i = 1; i<=grid.length**2; i++){
		if(values.get(i) === 2){
			output[0] = i;
		}
		if(!values.get(i)){
			output[1] = i;
		}
	}
	return output;
};