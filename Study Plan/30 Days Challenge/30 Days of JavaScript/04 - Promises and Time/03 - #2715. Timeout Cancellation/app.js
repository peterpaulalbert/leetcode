/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
	let cancelled = false;

	let execute = () => {
		if (!cancelled) {
			fn(...args)
		}
	}

	setTimeout(execute, t);

	return () => {
		cancelled = true;
	};
}

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

const result = [];
const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelTimeMs = 50;
const start = performance.now();
const log = (...argsArr) => {
	const diff = Math.floor(performance.now() - start);
	result.push({ "time": diff, "returned": fn(...argsArr) });
}
const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
	console.log(JSON.stringify(result)); // [{"time":20,"returned":10}]
}, maxT + 15)
