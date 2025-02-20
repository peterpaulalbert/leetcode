
console.log(findDifferentBinaryString(["01", "10"])); // expected: "11"
console.log('-------------------------------------------------------')
console.log(findDifferentBinaryString(["00", "01"])); // expected: "11"
console.log('-------------------------------------------------------')
console.log(findDifferentBinaryString(["111", "011", "001"])); // expected: "101"
console.log('-------------------------------------------------------')

/**
 * @param {string[]} nums
 * @return {string}
 */
function findDifferentBinaryString(nums) {
	let combinations = [];
	let l = nums.length;

	buildBinaryStrings("", l, nums, combinations);

	console.log(combinations);
	return combinations[0];
};


function buildBinaryStrings(prefix, targetLength, nums, combinations){
	if(prefix.length === targetLength)
	{
		return;
	}

	string0 = prefix + "0";
	if(string0.length === targetLength && !nums.includes(string0)){
		combinations.push(string0);
	}
	else{
		buildBinaryStrings(string0, targetLength, nums, combinations);
	}

	string1 = prefix + "1";
	if(string1.length === targetLength && !nums.includes(string1)){
		combinations.push(string1);
	}
	else{
		buildBinaryStrings(string1, targetLength, nums, combinations);
	}
}