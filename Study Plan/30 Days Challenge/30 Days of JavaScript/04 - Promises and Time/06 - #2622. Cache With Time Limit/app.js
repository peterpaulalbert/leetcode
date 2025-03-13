class TimeLimitedCache {
	constructor() {
		this.values = new Map();
	}

	/** 
	 * @param {number} key
	 * @param {number} value
	 * @param {number} duration time until expiration in ms
	 * @return {boolean} if un-expired key already existed
	 */
	set(key, value, duration) {
		let output;
		if (this.values.has(key)) {
			clearTimeout(this.values.get(key).timeout);
			output = true;
		}
		else {
			output = false;
		}
		this.values.set(key, {value: value, timeout: setTimeout(() => { this.values.delete(key); }, duration)});
		
		return output;
	};


	/** 
	 * @param {number} key
	 * @return {number} value associated with key
	 */
	get(key) {
		if (this.values.has(key)) {
			return this.values.get(key).value;
		}
		else {
			return -1;
		}
	};

	/** 
	 * @return {number} count of non-expired keys
	 */
	count() {
		return this.values.size;
	};

};


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 50)); // null
console.log(timeLimitedCache.set(1, 50, 100)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
