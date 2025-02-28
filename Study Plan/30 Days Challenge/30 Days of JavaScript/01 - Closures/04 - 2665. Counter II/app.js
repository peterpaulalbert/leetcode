/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
	return new Counter(init);
    };
    
    /**
     * const counter = createCounter(5)
     * counter.increment(); // 6
     * counter.reset(); // 5
     * counter.decrement(); // 4
     */
    
     class Counter{
	constructor(init){
	    this.original = init;
	    this.count = this.original;
	}
    
	increment(){
	    this.count++;
	    return this.count;
	}
    
	decrement(){
	    this.count--;
	    return this.count;
	}
    
	reset(){
	    this.count = this.original;
	    return this.count;
	}
     }