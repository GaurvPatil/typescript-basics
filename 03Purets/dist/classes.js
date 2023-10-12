"use strict";
class User {
    constructor(email, name) {
        this.city = "Pune";
        // read only
        this.bloodGroup = "B+";
        // private = not accesable .  default Public
        this.height = 5.9;
        this.email = email;
        this.name = name;
    }
}
const Gaurav = new User("g@g.com", "gaurav");
Gaurav.city = "Banglore";
// Gaurav.height = not accesable
// other syntax  = better way
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Pune";
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // there are private method also 
    deleteToken() {
        console.log("token deleted");
    }
    get courseCount() {
        return this._courseCount;
    }
    //   in settters there is no return type not even VOID 
    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = coursenum;
    }
}
