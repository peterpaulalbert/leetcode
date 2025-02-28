/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
	return new Hamlet(val);
    };
    
    /**
     * expect(5).toBe(5); // true
     * expect(5).notToBe(5); // throws "Equal"
     */
    
     class Hamlet{
	constructor(val){
	    this.value = val;
	}
    
	toBe(val){
	    if(this.value===val){
		return true;
	    }
	    else{
		throw new Error("Not Equal");
	    }
	}
    
	notToBe(val){
	    if(this.value!==val){
		return true;
    
	    }
	    else{
		throw new Error("Equal");
	    }
	}
    }