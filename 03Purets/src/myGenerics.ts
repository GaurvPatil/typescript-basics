const score: Array<number> = [];
const names: Array<string> = [];

function indentity(val: number): number {
  return val;
}

// use any in critical cases only
function identityTwo(val: any): any {
  return val;
}

// now generic
// if param type - number it will return number , if boolean it will return boolean . just like that whatever type we send it will automatically identified that it lock that value and return the result with same type , because return type is also = type
function identityThree<type>(val: type): type {
  return val;
}

identityThree(true); //boolean
identityThree("gaurav"); //string
identityThree(23); //number

// we can use whatever letter or word we want but use same word or letter in palces
function identityFoure<H>(val: H): H {
  return val;
}

identityFoure(true); //boolean
identityFoure("gaurav"); //string
identityFoure(23); //number

// if we are trying to build our own types
interface Bottle {
  brand: string;
  type: number;
}

function identityFive<Bottle>(val: Bottle): Bottle {
  return val;
}

// generics in array
// value we are taking is array of T type - array of object or numnber or boolean etc... but return type is T that means one of the value from that array that's why we write products[3]
function getSearchProducts<T>(products: T[]): T {
  return products[3];
}

// arrow function syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[3];
};

// more about generics

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
// it can be anything
anotherFunction(3, "5");

function anotherFunction2<T, U extends boolean>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
// U needs to be boolean value
anotherFunction2(3, false);

interface Database {
  connection: string;
  userName: string;
  password: string;
}
function anotherFunction3<T, U extends Database>(valOne: T, valTwo: U): object {
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


// generics in class 

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  type: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
