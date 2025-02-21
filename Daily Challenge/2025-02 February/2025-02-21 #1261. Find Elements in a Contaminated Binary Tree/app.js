/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class FindElements {

	/**
	 * @param {TreeNode} root
	 */
	constructor(root) {
		this.indices = new Set();   // Using this extra space for faster lookup : O(1)
		this.root = this.recover(root, 0);
	}

	/**
	 * 
	 * @param {TreeNode} root 
	 * @param {number} index 
	 * @return {TreeNode}
	 */
	recover(root, index) {

		if (!root) {
			return null; // Don't proceed if the root is null
		}

		this.indices.add(index);
		root.val = index;   // Update the values of tree
		this.recover(root.left, (2 * index) + 1);
		this.recover(root.right, (2 * index) + 2);
		return root;
	}

	/** 
	 * @param {number} target
	 * @return {boolean}
	 */
	find(target) {
		return this.indices.has(target);
	};

};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
let obj = new FindElements([-1,null,-1]);
console.log(obj.find(1)); //expected: false
console.log(obj.find(2)); //expected: true