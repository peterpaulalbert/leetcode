/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
	let cancelled = false;
    fn(...args);

	let execute = () => {
		if (!cancelled) {
			fn(...args);
            setTimeout(execute, t);
		}
	}

	setTimeout(execute, t);

	return () => {
		cancelled = true;
	};
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */

const result = [];
const fn = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;
const start = performance.now();
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
}
     
const cancel = cancellable(log, args, t);
setTimeout(cancel, cancelTimeMs);
 
setTimeout(() => {
    console.log(JSON.stringify(result)); // [
                         //     {"time":0,"returned":8},
                         //     {"time":35,"returned":8},
                         //     {"time":70,"returned":8},
                         //     {"time":105,"returned":8},
                         //     {"time":140,"returned":8},
                         //     {"time":175,"returned":8}
                         // ]
}, cancelTimeMs + t + 15)    