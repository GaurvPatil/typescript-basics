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




class User2 {
  readonly city: string = "Pune";
  private _courseCount: number = 1;
  protected result : string = "Pass " 
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }


// there are private method also 
private deleteToken(){
    console.log("token deleted")
}

  get courseCount(): number {
    return this._courseCount;
  }


//   in settters there is no return type not even VOID 
  set courseCount(coursenum: number) {
    if (coursenum <= 1) {
      throw new Error("course count should be more than 1");
    }
    this._courseCount = coursenum;
  }
}


// it cannot  aquire the property which mention as private 
class SubUser extends User2{
    isFamily : boolean = true
    // protected properties can accesable in parent class also in class that inherite parent class 
    chnageResult(){
        this.result = "Fail"
    }
}