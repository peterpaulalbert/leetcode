console.log(mostProfitablePath([[0,1],[1,2],[1,3],[3,4]], 3, [-2,4,2,-4,6])); // expected: 6
console.log('-------------------------------------------------------')
console.log(mostProfitablePath([[0,1]], 1, [-7280,2350])); // expected: -7280
console.log('-------------------------------------------------------')

/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
function mostProfitablePath (edges, bob, amount) {
	const stack = [];
	const state = {
	    untracked: -1,
	    tracked: 0,
	    opened: 1,
	};
	let n = amount.length;
	const graph = new Map(Array.from({ length: n }, (_, i) => [i, new Set()]));
	const parents = Array(n).fill(-1);
	const visited = Array(n).fill(state.untracked);
    
	let v1, v2;
	for (let edge of edges) {
	    [v1, v2] = edge;
	    graph.get(v1).add(v2);
	    graph.get(v2).add(v1);
	}
    
	// We define the tree structure for both and the parent nodes for Bob
	let current;
	stack.push(0);
	visited[0] = state.tracked;
	while (stack.length) {
	    current = stack.pop();
	    visited[current] = state.tracked;
	    graph.get(current).forEach((child) => {
		if (visited[child] === state.untracked) {
		    stack.push(child);
		    parents[child] = current;
		}
	    });
	}
    
	let isLeaf, profit;
	let pntStack = 0;
	let posAlise = 0;
	let posBob = bob;
	let netIncome = posAlise !== posBob ? amount[posAlise] : amount[posAlise] / 2;
	
	// Place the players in their original positions
	stack.push(0, netIncome);
	visited[posAlise] = state.opened;
	visited[posBob] = state.opened;
    
	// Let's start the game
	let maxNetIncome = -Infinity;
	while (pntStack < stack.length) {
	    
	    // Choosing Bob's next move
	    if (parents[posBob] >= 0) {
		posBob = parents[posBob];
	    }
    
	    current = stack.length;
	    // We are going through the available paths for Alice
	    while (pntStack < current) {
		isLeaf = true;
		posAlise = stack[pntStack++];
		netIncome = stack[pntStack++];
		graph.get(posAlise).forEach((child) => {
		    if (parents[posAlise] !== child) {
			profit = 0;
			if (visited[child] !== state.opened) {
			    profit = child !== posBob ? amount[child] : amount[child] / 2;
			}
			stack.push(child, netIncome + profit);
			visited[child] = state.opened;
			isLeaf = false;
		    }
		});
    
		if (isLeaf) {
		    maxNetIncome = Math.max(maxNetIncome, netIncome);
		}
	    }
	    visited[posBob] = state.opened;
	}
	return maxNetIncome;
    };