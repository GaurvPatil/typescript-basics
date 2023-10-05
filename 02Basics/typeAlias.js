"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) { }
createUser({ name: "gaurav", email: "gaurav@gmail.com", isActive: false });
// ok now i want return type also User 
function createUserr(user) {
    return { name: "", email: "", isActive: false };
}
