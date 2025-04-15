// LeetCode 75: Queue
// #0933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75


"use strict";


class RecentCounter {
	constructor() {
		this.queue = [];
	}

	/** 
	 * @param {number} t
	 * @return {number}
	 */
	ping(t) {
		while (true) {
			if (this.queue[0] < t - 3000){
				this.queue.shift();
			}
			else{
				break;
			}
		}
		this.queue.push(t);
		console.log(this.queue);
		return this.queue.length;
	};
};


/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

let counter = new RecentCounter();

console.log(counter.ping(1));
// expected: 1
console.log(counter.ping(100));
// expected: 2
console.log(counter.ping(3001));
// expected: 3
console.log(counter.ping(3002));
// expected: 3
console.log('-------------------------------------------------------');

