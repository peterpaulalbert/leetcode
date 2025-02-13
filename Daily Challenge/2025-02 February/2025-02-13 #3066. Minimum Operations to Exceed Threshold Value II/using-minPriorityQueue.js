/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
	const queue = new MinPriorityQueue({ priority: x => x });
	for (const num of nums) {
		queue.enqueue(num);
	}
	let operations = 0;
	while (queue.front().element < k) {
		let min1 = queue.dequeue().element;
		let min2 = queue.dequeue().element;
		queue.enqueue(min1 * 2 + min2);
		operations++;
	}
	return operations;
};