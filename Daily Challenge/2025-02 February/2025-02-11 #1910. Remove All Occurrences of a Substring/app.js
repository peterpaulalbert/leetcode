console.log(removeOccurrences("xxxabcxxx", "abc")); // expected: "xxxxxx"
console.log('-------------------------------------------------------')
console.log(removeOccurrences("daabcbaabcbc", "abc")); // expected: "dab"
console.log('-------------------------------------------------------')
console.log(removeOccurrences("axxxxyyyyb", "xy")); // expected: "ab"
console.log('-------------------------------------------------------')

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
function removeOccurrences(s, part) {
	let output = s;
	let removed = removePart(output, part);;
	do{
		output = removed;
		removed = removePart(output, part);
	} while(output.length !== removed.length);

	return output;
};

function removePart(s, part) {
	let start = s.indexOf(part);
	if(start === -1){
		return s;
	}
	let end = start + part.length-1;
	let left = s.slice(0, start);
	let right = s.slice(end + 1, s.length);

	let output =  left + right;
	return output;
}