console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])); // expected: [1,2,3,4,5,6,7]
console.log('-------------------------------------------------------')
console.log(constructFromPrePost([1], [1])); // expected: [1]
console.log('-------------------------------------------------------')

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function constructFromPrePost(preorder, postorder) {
	return buildBinaryTree(preorder, postorder);
};

function buildBinaryTree(preorder, postorder) {
	if (!preorder.length || !postorder.length) return null;
	if (postorder.length == 1) return new TreeNode(preorder.shift());

	const tree = new TreeNode(preorder.shift());

	postorder.pop();
	const index = postorder.indexOf(preorder.at(0));

	tree.left = buildBinaryTree(preorder, postorder.slice(0, index + 1));
	tree.right = buildBinaryTree(preorder, postorder.slice(index + 1));


	return tree;
}