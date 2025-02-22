/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
function recoverFromPreorder(traversal) {
	let count = 0;
	const stack = [];

	while (count < traversal.length) {

		let depth = 0;
		while (count < traversal.length && traversal[count] === '-') {
			depth++;
			count++;
		}

		let value = 0;
		while (count < traversal.length && traversal[count] >= '0' && traversal[count] <= '9') {
			value = value * 10 + parseInt(traversal[count]);
			count++;
		}

		const node = new TreeNode(value);

		if (stack.length === 0) {
			stack.push(node);
			continue;
		}

		while (stack.length > depth) {
			stack.pop();
		}

		const parent = stack[stack.length - 1];
		if (!parent.left) {
			parent.left = node;
		} else {
			parent.right = node;
		}

		stack.push(node);
	}

	return stack[0];
};