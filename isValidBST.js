//如果根节点为null或未定义，我们可以返回true，
// 因为根据定义，这是一个有效的二叉搜索树。

const isValidBST = (root) => {
	function dfs(root,min,max){
		if (!root) return true
		if (root.val <= min || root.val >= max){
			return false
		}
		return dfs(root.left, min,root.val) && dfs(root.right, root.val, max)
	}
	return dfs(root, -Infinity, Infinity)
}
console.log(isValidBST([5, 1, 4, null, null, 3, 6]));
console.log(isValidBST(1));
console.log(isValidBST(0));
console.log(isValidBST(-3));