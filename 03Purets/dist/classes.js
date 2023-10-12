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
        this.result = "Pass ";
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
// it cannot  aquire the property which mention as private 
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    // protected properties can accesable in parent class also in class that inherite parent class 
    chnageResult() {
        this.result = "Fail";
    }
}
