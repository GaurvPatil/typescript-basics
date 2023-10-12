class User {
    email: string;
    name: string;
    city: string = "Pune";
    // read only
    readonly bloodGroup: string = "B+";
    // private = not accesable .  default Public
    private height: number = 5.9;
    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }
  
  const Gaurav = new User("g@g.com", "gaurav");
  Gaurav.city = "Banglore";
  
  // Gaurav.height = not accesable
  
  // other syntax  = better way 
  
  class User2{
      readonly city : string = "Pune"
      constructor(
          public email : string,
          public name : string,
          private userId : string
      ){}
  }