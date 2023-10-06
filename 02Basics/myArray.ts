const superHeros: string[] = [];
const heroPower: number[] = [];

// or
const names: Array<string> = [];

superHeros.push("ironMan");
heroPower.push(60);

// using type

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

allUsers.push({ name: "", isActive: false });


// array of array 
const mlModules:number[][] = [
    [255 , 56 , 88]
] 

mlModules.push([55,44])

export {};
