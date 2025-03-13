/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
function debounce(fn, t) {
	let timeout;
	return (...inputs) => {
		 if(timeout){
			clearTimeout(timeout);
		 }
		timeout = setTimeout(() => { fn(...inputs) }, t);
		
	};
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// let start = Date.now();
// function log(...inputs) {
// 	console.log([Date.now() - start, inputs])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms