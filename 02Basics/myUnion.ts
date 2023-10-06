let score: string | number = 32;
score = "55";
score = 99;

// type union

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let gaurav: User | Admin = { name: "gaurav", id: 2350 };

// also beacome a admin
gaurav = { userName: "gaurav", id: 553 };


function getDbId(id:number | string){

    // id.toLowerCase()

    // this gives error beacuse toLowerCase() method not supported to the numbers we need to use methods that supported by both data types 

    // but if we want to use methods that only supported to the particular data type we have to check the param type 

    // if(typeof id === "string"){
    //     id.toLocaleLowerCase()
    // }


}
getDbId(3);
getDbId("3")

// array 
// this gives error this tells - array is either number or string 
let data : number[] | string[] = []

// if you want both 

let data2 : (number | string ) [] = [1 , 2 , "3"]


// there are some situation where we have strict values like pi 
let pi : 3.14 = 3.14;

// pi = 55 not allow 

// or mutliple value 

let seatAllotment : "front" | "middle" | "back";




export {};
