console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]])); // expected: [[1,6],[2,3],[3,2],[4,6]]
console.log('-------------------------------------------------------')
console.log(mergeArrays([[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]])); // expected: [[1,3],[2,4],[3,6],[4,3],[5,5]]
console.log('-------------------------------------------------------')

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
function mergeArrays(nums1, nums2) {
	let output = [];
	let e1 = nums1.shift();
	let e2 = nums2.shift();
	do{
		let i1 = Number.MAX_SAFE_INTEGER;
		let i2 = Number.MAX_SAFE_INTEGER;
		if(e1) i1 = e1[0];
		if(e2) i2 = e2[0];

		if (i1 === i2) {
			output.push([e1[0], e1[1] + e2[1]]);
			e1 = nums1.shift();
			e2 = nums2.shift();
		}
		else if(i1 < i2){
			output.push([e1[0], e1[1]]);
			e1 = nums1.shift();
		}
		else if(i2 < i1){
			output.push([e2[0], e2[1]]);
			e2 = nums2.shift();
		}

	}
	while (e1 || e2);

	return output;
};