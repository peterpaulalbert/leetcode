class EventEmitter {
	constructor() {
		this.subscriptions = [];
	}
	/**
	 * @param {string} eventName
	 * @param {Function} callback
	 * @return {Object}
	 */
	subscribe(eventName, callback) {
		let subscription = { eventName: eventName, callback: callback };
		this.subscriptions.push(subscription);
		let i = this.subscriptions.length - 1;
		return {
			unsubscribe: () => {
				//let i = this.subscriptions.find((element) => element.callback === subscription.callback);
				//this.subscriptions.splice(i, 1);
				this.subscriptions[i].eventName = null;
				return undefined
			}
		};
	}

	/**
	 * @param {string} eventName
	 * @param {Array} args
	 * @return {Array}
	 */
	emit(eventName, args = []) {
		let output = [];
		for (let s of this.subscriptions) {
			if (s.eventName === eventName) {
				output.push(s.callback(...args));
			}
		}
		return output;
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */


let ee;

ee = new EventEmitter();
console.log(ee.emit("firstEvent"));
s1 = ee.subscribe("firstEvent", cb1 = (...args) => { return 5; });
s2 = ee.subscribe("firstEvent", cb1 = (...args) => { return 6; });
console.log(ee.emit("firstEvent"));
// expected: 
// [
// 	[],
// 	["emitted", []], 
// 	["subscribed"], 
// 	["subscribed"], 
// 	["emitted", [5, 6]]
// ]
console.log('-------------------------------------------------------')


ee = new EventEmitter();
s1 = ee.subscribe("firstEvent", cb1 = (...args) => { return args.join(','); });
console.log(ee.emit("firstEvent", [1, 2, 3]));
console.log(ee.emit("firstEvent", [3, 4, 6]));
// expected: 
// [
// 	[],
// 	["subscribed"],
// 	["emitted",["1,2,3"]],
// 	["emitted",["3,4,6"]]
// ]
console.log('-------------------------------------------------------')


ee = new EventEmitter();
s1 = ee.subscribe("firstEvent", cb1 = (...args) => { return args.join(','); });
console.log(ee.emit("firstEvent", [1, 2, 3]));
console.log(s1.unsubscribe());
console.log(ee.emit("firstEvent", [4, 5, 6]));
// expected: 
// [
// 	[],
// 	["subscribed"],
// 	["emitted",["1,2,3"]],
// 	["unsubscribed",0],
// 	["emitted",[]]
// ]
console.log('-------------------------------------------------------')


ee = new EventEmitter();
s1 = ee.subscribe("firstEvent", cb1 = (x) => { return x + 1; });
s2 = ee.subscribe("firstEvent", cb1 = (x) => { return x + 2; });
console.log(s1.unsubscribe());
console.log(ee.emit("firstEvent", [5]));
// expected: 
// [
// 	[],
// 	["subscribed"],
// 	["subscribed"],
// 	["unsubscribed",0],
// 	["emitted",[7]]
// ]
console.log('-------------------------------------------------------')


ee = new EventEmitter();
s1 = ee.subscribe("eventOne", cb1 = (...args) => { return args.join(','); });
s2 = ee.subscribe("eventTwo", cb1 = (...args) => { return args.join(','); });
console.log(ee.emit("eventOne", [1,2,3]));
console.log(ee.emit("eventTwo", [7,8,9]));
// [
// 	[],
// 	["subscribed"],
// 	["subscribed"],
// 	["emitted",["1,2,3"]],
// 	["emitted",["7,8,9"]]
// ]
console.log('-------------------------------------------------------')


ee = new EventEmitter();
s1 = ee.subscribe("firstEvent", cb1 = (x) => { return x + 1; });
s2 = ee.subscribe("firstEvent", cb1 = (x) => { return x + 2; });
s3 = ee.subscribe("firstEvent", cb1 = (x) => { return x + 3; });
console.log(s2.unsubscribe());
console.log(s3.unsubscribe());
console.log(ee.emit("firstEvent", [5]));
// [
// 	[],
// 	["subscribed"],
// 	["subscribed"],
// 	["subscribed"],
// 	["unsubscribed",1],
// 	["unsubscribed",2],
// 	["emitted",[6]]
// ]
console.log('-------------------------------------------------------')

