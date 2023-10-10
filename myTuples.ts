// diffrent from array
let TUSer: Array<string | number> = [23, "gaurav"];
// size not matter , position not matter

let user: [string, number, boolean] = ["gaurav", 2350, true];

type USER = [string, number];
let newUser: USER = ["gaurav", 2333];

let rgb: [number, number, number];
rgb = [255, 112, 113];


// but try to avoid tuples . beacuse , let's take above example "rgb" , the array should not allow to manipulate but if we use methods like push , pop etc it works 

// rgb.push(5);
// we don't want this we want array with length 3 


export {};
