// LeetCode 75: Stack
// #0735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
	let stack = [];
	stack.push(asteroids[0]);
	for (let i = 1; i < asteroids.length; i++) {
		let prevSize = Math.abs(stack.at(-1));
		let prevDirection = stack.at(-1) > 0 ? 1 : -1;

		let nextSize = Math.abs(asteroids[i]);
		let nextDirection = asteroids[i] > 0 ? 1 : -1;

		while (prevDirection > nextDirection) {
			if (prevSize === nextSize) {
				stack.pop();
				nextDirection = null;
				break;
			}

			if (prevSize > nextSize) {
				nextDirection = null;
				break;
			}

			stack.pop();
			if (stack.length === 0) {
				prevDirection = null;
				stack.push(asteroids[i]);
				break;
			}
			else {
				prevSize = Math.abs(stack.at(-1));
				prevDirection = stack.at(-1) > 0 ? 1 : -1;
				continue;
			}
		}

		if (prevDirection <= nextDirection) {
			stack.push(asteroids[i]);
		}
	}
	return stack;
};


console.log(asteroidCollision([5, 10, -5]));
// expected: [5,10]
console.log('-------------------------------------------------------');

console.log(asteroidCollision([8, -8]));
// expected: []
console.log('-------------------------------------------------------');

console.log(asteroidCollision([10, 2, -5]));
// expected: [10]
console.log('-------------------------------------------------------');

console.log(asteroidCollision([-2, -1, 1, 2]));
// expected: [-2,-1,1,2]
console.log('-------------------------------------------------------');

console.log(asteroidCollision([-2, -2, 1, -2]));
// expected: [-2,-2,-2]
console.log('-------------------------------------------------------');

console.log(asteroidCollision([-2, 1, 1, -2]));
// expected: [-2, -2]
console.log('-------------------------------------------------------');

