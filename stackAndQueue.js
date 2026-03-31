var myStack = function () {
    this.q1 =[];
    this.q2 =[];
};

myStack.prototype.push = function(x) {
    this.q1.push(x);
};

myStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i =0; i<n-1; i++) {
        let frontEle = this.q1.shift();
        this.q2.push(frontEle);
    }
    let ans = this.q1.shift();

    let temp = this.q1;
    this.q1 = this.q2;
    this. q2 = temp;

    return ans;
};

myStack.prototype.top = function () {
    let n = this.q1.length;
    for(let i =0; i<n-1; i++) {
        this.q2.push(this.q1.shift());
    }
    let front = this.q1[0];
    this.q2.push(this.q1.shift());

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp 
 return front;
 
};

myStack.prototype.empty = function () {
    return this.q1.length === 0;
}





var myQueue = function () {
    this.s1 =[];
    this.s2 =[];
};


myQueue.prototype.push = function (x) {
    this.s1.push(x);
}

myQueue.prototype.pop = function() {
    if ( this.s2.length==0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2.pop();
}

myQueue.prototype.peek = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1]
};

myQueue.prototype.empty =  function () {
    return this.s1.length === 0 && this.s2.length == 0

};   




var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
            stack.push(s[i]);
        } else {
            let top = stack.pop();

            if (!top || (top == "[" && s[i] != "]") || (top === "{" && s[i] != "}") || (top === "(" && s[i] != ")")) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


var removeOuterParantheses = function (s) {
    let stack = [];
    let ans = "";

    for (let i =0; i<s.length; i++) {
        if (s[i] === "(" ) {
            stack.push(s[i]);
            let len = stack.length;
            if(len>1) {
                ans = ans + s[i];
            }
        }  else {
            let len = stack.length;
            if (len>1) {
                ans = ans+s[i];
            }

            stack.pop();
        }
    }

    return ans;
}