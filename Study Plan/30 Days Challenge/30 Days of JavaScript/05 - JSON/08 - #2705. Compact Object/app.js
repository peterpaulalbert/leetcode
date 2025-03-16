console.log(JSON.stringify(compactObject([null, 0, false, 1])));
// expected: [1]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(compactObject({ "a": null, "b": [false, 1] })));
// expected: {"b": [1]}
console.log('-------------------------------------------------------')

console.log(JSON.stringify(compactObject([null, 0, 5, [0], [false, 16]])));
// expected: [5, [], [16]]
console.log('-------------------------------------------------------')

console.log(JSON.stringify(compactObject({"a": 1, "b": 1, "c": null, "d": "false", "e": 0})));
// expected: {"a":1,"b":1,"d":"false"}
console.log('-------------------------------------------------------')

console.log(JSON.stringify(compactObject([0,1,0,[[[null, 0], false], false], false])));
// expected: [1,[[[]]]]
console.log('-------------------------------------------------------')


/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
	let compactedObject;
	if (Array.isArray(obj)) {
		compactedObject = [];
		for (let i = 0; i < obj.length; i++) {
			if (obj[i]) {
				compactedObject.push(compactChild(obj[i]));
			}
		}
	}
	else {
		compactedObject = {};
		for (let key of Object.keys(obj)) {
			if (obj[key]) {
				compactedObject[key] = compactChild(obj[key]);
			}
		}
	}
	return compactedObject;
};


function compactChild(child) {
	if (typeof(child) !== 'object') {
		return child;
	}

	if (Array.isArray(child)) {
		let compactedChild = [];
		for (let i = 0; i < child.length; i++) {
			if (child[i]) {
				compactedChild.push(compactChild(child[i]));
			}
		}
		return compactedChild;
	}
	else {
		let compactedChild = {};
		for (let key of Object.keys(child)) {
			if (child[key]) {
				compactedChild[key] = compactChild(child[key]);
			}
		}
		return compactedChild;
	}
}