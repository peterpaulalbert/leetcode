// Daily Question: 2025-03-21
// #2115. Find All Possible Recipes from Given Supplies
// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/description/?envType=daily-question&envId=2025-03-21


/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
function findAllRecipes(recipes, ingredients, supplies) {
	let supplyMap = new Map();
	for(let s of supplies){
		supplyMap.set(s, s);
	}

	let created = [];
	for(let i=0; i<recipes.length; i++){
		let canCreate = true;
		for(let j=0; j<ingredients[i].length; j++){
			if(!supplyMap.has(ingredients[i][j])){
				canCreate = false;
			}
		}
		if(canCreate){
			created.push(recipes[i]);
			if(!supplyMap.has(recipes[i])){
				supplyMap.set(recipes[i], recipes[i]);
			}
		}
	}
	return created;
};


console.log(findAllRecipes(["bread"], [["yeast", "flour"]], ["yeast", "flour", "corn"]));
// expected: ["bread"]
console.log('-------------------------------------------------------')

console.log(findAllRecipes(["bread", "sandwich"], [["yeast", "flour"], ["bread", "meat"]], ["yeast", "flour", "meat"]));
// expected: ["bread","sandwich"]
console.log('-------------------------------------------------------')

console.log(findAllRecipes(["bread", "sandwich", "burger"], [["yeast", "flour"], ["bread", "meat"], ["sandwich", "meat", "bread"]], ["yeast", "flour", "meat"]));
// expected: ["bread","sandwich","burger"]
console.log('-------------------------------------------------------')
