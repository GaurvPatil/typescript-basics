function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// number type
addTwo(5);

// string type
getUpper("gaurav");

// multiple types
signUp("gaurav", "gaurav@co.dev", false);

// default values
loginUser("gaurav", "gaurav@co.dev");

export {};

// in case of varibales  , it's optional . it inferce the type pretty nicely . so there is no problem . In the case of function , it is rally compulsory
