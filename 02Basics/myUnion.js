"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 32;
score = "55";
score = 99;
var gaurav = { name: "gaurav", id: 2350 };
// also beacome a admin
gaurav = { userName: "gaurav", id: 553 };
function getDbId(id) {
    // id.toLowerCase()
    // this gives error beacuse toLowerCase() method not supported to the numbers we need to use methods that supported by both data types 
    // but if we want to use methods that only supported to the particular data type we have to check the param type 
    // if(typeof id === "string"){
    //     id.toLocaleLowerCase()
    // }
}
getDbId(3);
getDbId("3");
// array 
// this gives error this tells - array is either number or string 
var data = [];
// if you want both 
var data2 = [1, 2, "3"];
// there are some situation where we have strict values like pi 
var pi = 3.14;
// pi = 55 not allow 
// or mutliple value 
var seatAllotment;
