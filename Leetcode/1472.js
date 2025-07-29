/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.homepage = homepage;
    this.stack = [];
    this.stack.push(this.homepage);
    this.currentPtr = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.stack.push(url);
    this.currentPtr = this.stack.length - 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currentPtr -= steps;
    if (this.currentPtr < 0) {
        this.currentPtr = 0;
    }
    let currentVal =  this.stack[this.currentPtr];
    console.log(currentVal);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.currentPtr += steps;
    if (this.currentPtr  > this.stack.length - 1) {
        this.currentPtr = this.stack.length - 1;
    }
    let cureentVal =  this.stack[this.currentPtr];
    console.log(cureentVal);
};
let homepage = 'leetcode.com';
let url = 'google.com';
var obj = new BrowserHistory(homepage)
obj.visit(url)
obj.visit('facebook.com');
obj.visit('youtube.com');
var param_2 = obj.back(1)
var param_4 = obj.back(1)
var param_3 = obj.forward(1);
obj.visit("linkedin.com");
obj.forward(2);
obj.back(2);
obj.back(7);