"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "gaurav",
    email: "gaurav@gmail.com",
    isActive: "true",
};
// if function accepting object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "gaurav", isPaid: false });
// if function return object
function createCourse() {
    return {};
}
// object with properties
function createCart() {
    return {
        name: "egg",
        price: 55,
    };
}
