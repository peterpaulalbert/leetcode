console.log(argumentsLength(...[5])); // expected: 1
console.log('-------------------------------------------------------')
console.log(argumentsLength(...[{}, null, "3"])); // expected: 3
console.log('-------------------------------------------------------')


/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
function argumentsLength(...args) {
	return arguments.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */