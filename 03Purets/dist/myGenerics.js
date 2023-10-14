"use strict";
const score = [];
const names = [];
function indentity(val) {
    return val;
}
// use any in critical cases only
function identityTwo(val) {
    return val;
}
// now generic
// if param type - number it will return number , if boolean it will return boolean . just like that whatever type we send it will automatically identified that it lock that value and return the result with same type , because return type is also = type
function identityThree(val) {
    return val;
}
identityThree(true); //boolean
identityThree("gaurav"); //string
identityThree(23); //number
// we can use whatever letter or word we want but use same word or letter in palces
function identityFoure(val) {
    return val;
}
identityFoure(true); //boolean
identityFoure("gaurav"); //string
identityFoure(23); //number
function identityFive(val) {
    return val;
}
// generics in array
// value we are taking is array of T type - array of object or numnber or boolean etc... but return type is T that means one of the value from that array that's why we write products[3]
function getSearchProducts(products) {
    return products[3];
}
// arrow function syntax
const getMoreSearchProducts = (products) => {
    return products[3];
};
// more about generics
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
// it can be anything
anotherFunction(3, "5");
function anotherFunction2(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
// U needs to be boolean value
anotherFunction2(3, false);
function anotherFunction3(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction3(3, {
    connection: "ajdnkw",
    userName: "gaurav",
    password: "gaurav123",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
