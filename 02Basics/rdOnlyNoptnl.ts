type User = {
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    // optional  
    creditCardDetails?:number
}

let myUser : User = {
    _id:"2350",
    name:"G",
    email:"g@g.com",
    isActive:true
}

myUser.name = "gaurav"

//  but when i try to change id it will throw error 
// myUser._id = "223"


// extra 

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate 

// or we can also do this 

type cardDetailss = cardNumber & cardDate & {
    cvv : number
}

// previous exmaple is better 