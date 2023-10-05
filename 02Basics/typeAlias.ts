type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// we create this for all data types if we need
type Mystring = string;
// but no need to do this

function createUser(user: User) {}

createUser({ name: "gaurav", email: "gaurav@gmail.com", isActive: false });

// ok now i want return type also User 
function createUserr(user:User):User{
return { name: "", email: "", isActive: false }
}

export {};
