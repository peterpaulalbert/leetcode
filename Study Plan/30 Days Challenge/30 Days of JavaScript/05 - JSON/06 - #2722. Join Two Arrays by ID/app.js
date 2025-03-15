console.log(JSON.stringify(join(
	[
		{ "id": 1, "x": 1 },
		{ "id": 2, "x": 9 }
	],
	[
		{ "id": 3, "x": 5 }
	]
)));
// expected: 
// [
// 	{"id": 1, "x": 1},
// 	{"id": 2, "x": 9},
// 	{"id": 3, "x": 5}
// ]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(join(
	[
		{ "id": 1, "x": 2, "y": 3 },
		{ "id": 2, "x": 3, "y": 6 }
	],
	[
		{ "id": 2, "x": 10, "y": 20 },
		{ "id": 3, "x": 0, "y": 0 }
	]
)));
// expected: 
// [
// 	{"id": 1, "x": 2, "y": 3},
// 	{"id": 2, "x": 10, "y": 20},
// 	{"id": 3, "x": 0, "y": 0}
// ]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(join(
	[
		{ "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
	],
	[
		{ "id": 1, "b": { "c": 84 }, "v": [1, 3] }
	]
)));
// expected: 
// [
// 	{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]
console.log('-------------------------------------------------------')

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function join(arr1, arr2) {
	let combined = new Map();
	for (let i = 0; i < arr1.length; i++) {
		combined.set(arr1[i].id, arr1[i]);
	}
	for (let i = 0; i < arr2.length; i++) {
		if(combined.has(arr2[i].id)){
			for(let key of Object.keys(arr2[i])){
				combined.get(arr2[i].id)[key] = arr2[i][key];
			}
		}
		else{
			combined.set(arr2[i].id, arr2[i])
		}
	}
	let order = combined.keys().toArray().sort((a, b) => a - b);
	let sorted = [];
	for (let i = 0; i < order.length; i++) {
		sorted.push(combined.get(order[i]))
	}
	return sorted;
};