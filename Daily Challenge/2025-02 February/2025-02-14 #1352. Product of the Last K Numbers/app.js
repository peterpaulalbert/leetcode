class ProductOfNumbers {

	constructor() {
		this.nums = [];
	}

	/** 
	 * @param {number} num
	 * @return {void}
	 */
	add(num) {
		this.nums.push(num);
	};


	/** 
	 * @param {number} k
	 * @return {number}
	 */
	getProduct(k) {
		let product = 1;
		for (let i = this.nums.length -1; i > this.nums.length - k - 1; i--) {
			product *= this.nums[i];
		}
		return product;
	};


	/** 
	 * Your ProductOfNumbers object will be instantiated and called as such:
	 * var obj = new ProductOfNumbers()
	 * obj.add(num)
	 * var param_2 = obj.getProduct(k)
	 */
};


let obj = new ProductOfNumbers();
obj.add(3);
obj.add(0);
obj.add(2);
obj.add(5);
obj.add(4);
console.log(obj.getProduct(2))
console.log(obj.getProduct(3));
console.log(obj.getProduct(4));
obj.add(8);
console.log(obj.getProduct(2));

