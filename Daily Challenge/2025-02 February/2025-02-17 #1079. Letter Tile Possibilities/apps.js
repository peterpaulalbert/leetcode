console.log(numTilePossibilities("AAB")); // expected: 8
console.log('-------------------------------------------------------')
console.log(numTilePossibilities("AAABBC")); // expected: 188
console.log('-------------------------------------------------------')


/**
 * @param {string} tiles
 * @return {number}
 */
function numTilePossibilities(tiles) {
	const freqencyMap = new Map();
	for (let tile of tiles) {
		freqencyMap.set(tile, (freqencyMap.get(tile) ?? 0) + 1);
	}

	return backtrack(freqencyMap);
};

function backtrack(frequencyMap) {
	let count = 0;

	for (let [tile, frequency] of frequencyMap.entries()) {
		if (frequency === 0){
			continue;
		}

		frequencyMap.set(tile, frequency - 1);
		count += 1 + backtrack(frequencyMap);
		frequencyMap.set(tile, frequency);
	}

	return count;
};