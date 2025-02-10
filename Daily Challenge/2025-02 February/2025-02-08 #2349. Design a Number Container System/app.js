let this_collection = new Map();
let this_lookupIndex = new Map();
let this_smallestIndex = new Map();

console.log(find(10)); // There is no index that is filled with number 10. Therefore, we return -1.
change(2, 10); // Your container at index 2 will be filled with number 10.
change(1, 10); // Your container at index 1 will be filled with number 10.
change(3, 10); // Your container at index 3 will be filled with number 10.
change(5, 10); // Your container at index 5 will be filled with number 10.
console.log(find(10)); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20.
console.log(find(10)); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.
console.log('----------------------------------------------------------')

// change(1,10) //null
// console.log( find(10) ); //1
// change(1,20) //null
// console.log( find(10) ); //-1 //UNDEFINED??
// console.log( find(20) ); // 1
// console.log( find(30) ); //-1
// console.log('----------------------------------------------------------')

change(26, 137);
change(120, 170);
change(182, 3);
change(62, 170);
console.log(find(170));
change(39, 107);
change(182, 137);
console.log(find(137));
console.log(find(137));
change(62, 121);
change(152, 16);
change(23, 117);
console.log(find(180));
console.log(find(187));
change(26, 30);
change(9, 137);
console.log(find(107));
console.log(find(117));
change(152, 54);
change(39, 117);
change(23, 178);
console.log(find(92));
console.log(find(16));
console.log(find(170));
change(10, 170);
change(182, 30);
console.log(find(9));
change(45, 178);
change(26, 191);
change(78, 67);
change(28, 137);
change(30, 165);
console.log(find(191));
console.log(find(121));
console.log(find(93));
change(26, 117);
console.log(find(109));
change(39, 33);
change(28, 165);
console.log(find(168));
change(177, 178);
change(62, 30);
change(22, 17);
change(74, 18);
console.log(find(22));
console.log(find(191));
change(9, 33);
console.log(find(188));
console.log(find(116));
change(120, 67);
console.log(find(133));
change(78, 16);
console.log(find(54));
console.log(find(33));
console.log(find(104));
console.log(find(33));
console.log(find(139));
change(86, 33);
console.log(find(178));
console.log(find(67));
console.log(find(69));
change(186, 128);
change(194, 3);
change(92, 178);
change(65, 87);
change(62, 87);
change(145, 118);
change(25, 133);
change(100, 186);
change(186, 28);
console.log(find(186));
change(195, 178);
console.log(find(67));
console.log(find(67));
console.log(find(157));
console.log(find(128));
change(25, 3);
console.log(find(76));
change(102, 78);
console.log(find(170));
console.log(find(54));
change(120, 168);
console.log(find(133));
change(37, 137);
change(16, 165);
change(26, 117);
console.log(find(18));
console.log(find(35));
change(65, 10);
console.log(find(170));
console.log(find(108));
change(9, 18);
change(145, 173);
change(120, 14);
console.log(find(173));
change(195, 46);
change(86, 78);
change(45, 46);
change(86, 121);
console.log(find(182));

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
function change(index, number) {
	if (this_collection.has(index)) {
		let oldNumber = this_collection.get(index);
		let indexes = this_lookupIndex.get(oldNumber)

		
		indexes.splice(indexes.indexOf(index), 1);
		//this_lookupIndex.set(oldNumber, indexes);
		if (indexes.length === 0) { // delete oldIndex from indexes
			this_lookupIndex.delete(oldNumber);
			this_smallestIndex.delete(oldNumber);
		} 
		else{
			this_smallestIndex.set(oldNumber, -1); // mark for recalculation on next find()
		}

	}
	this_collection.set(index, number);

	if (this_lookupIndex.has(number)) {
		let indexes = this_lookupIndex.get(number);
		indexes.push(index);
		//indexes.sort((a, b) => { return a - b });
		//this_lookupIndex.set(number, indexes);
		if(index < this_smallestIndex.get(number)){
			this_smallestIndex.set(number, index);
		}
	}
	else {
		this_lookupIndex.set(number, [index]);
		this_smallestIndex.set(number, index);
	}
};

/**
 * @param {number} number
 * @return {number}
 */
function find(number) {
	if (this_smallestIndex.has(number)) {
		let s = this_smallestIndex.get(number);
		if(s === -1){ // recalculate
			let smallest = Number.MAX_SAFE_INTEGER;
			for(let i of this_lookupIndex.get(number)){
				if(i < smallest){
					smallest = i;
				}
			}
			this_smallestIndex.set(number, smallest);
		}
		return this_smallestIndex.get(number);

	}
	else {
		return -1;
	}
};
