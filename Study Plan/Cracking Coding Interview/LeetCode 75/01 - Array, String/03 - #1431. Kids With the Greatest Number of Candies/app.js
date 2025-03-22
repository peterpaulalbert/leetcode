// LeetCode 75: Array / String
// #1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    let output = [];
    let max = 0;
    for(let c of candies){
	if(c > max){
		max = c;
	}
    }
    for(let c of candies){
	if(c + extraCandies >= max){
		output.push(true);
	}
	else{
		output.push(false);
	}
    }
    return output;
};


console.log(kidsWithCandies([2,3,5,1,3], 3));
// expected: [true,true,true,false,true] 
console.log('-------------------------------------------------------')

console.log(kidsWithCandies([4,2,1,1,2], 1));
// expected: [true,false,false,false,false] 
console.log('-------------------------------------------------------')

console.log(kidsWithCandies([12,1,12], 10));
// expected: [true,false,true]
console.log('-------------------------------------------------------')
