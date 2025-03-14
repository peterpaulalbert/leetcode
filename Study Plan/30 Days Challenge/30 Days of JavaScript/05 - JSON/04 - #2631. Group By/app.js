/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
	let output = {};
	for (let i = 0; i < this.length; i++) {
		let result = fn(this[i]);
		if (!output[result]) {
			output[result] = [];
		}
		output[result].push(this[i]);
	}
	return output;
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

let array;
let fn;

array = [
	{ "id": "1" },
	{ "id": "1" },
	{ "id": "2" }
];
fn = function (item) {
	return item.id;
}
console.log(JSON.stringify(array.groupBy(fn)));
// expected:
// {
// 	"1": [{ "id": "1" }, { "id": "1" }],
// 	"2": [{ "id": "2" }]
// }
console.log('-------------------------------------------------------')

array = [
	[1, 2, 3],
	[1, 3, 5],
	[1, 5, 9]
];
fn = function (list) {
	return String(list[0]);
}
console.log(JSON.stringify(array.groupBy(fn)));
// expected:
// {
// 	"1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }
console.log('-------------------------------------------------------')

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fn = function (n) {
	return String(n > 5);
}
console.log(JSON.stringify(array.groupBy(fn)));
// expected:
// {
// 	"true": [6, 7, 8, 9, 10],
// 	"false": [1, 2, 3, 4, 5]
// }
console.log('-------------------------------------------------------')
