"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// number type
addTwo(5);
// string type
getUpper("gaurav");
// multiple types
signUp("gaurav", "gaurav@co.dev", false);
// default values
loginUser("gaurav", "gaurav@co.dev");
// lecture - 2
function addNum(num) {
    return num + 2;
}
var getString = function (s) {
    return " ";
};
// functions return nothing
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
// function return type 
addNum(2);
// in case of varibales  , it's optional . it inferce the type pretty nicely . so there is no problem . In the case of function , it is rally compulsory
