type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// You can actually use a type alias to give a name to any type at all, not just an object type. For example, 
type Mystring = string;



function createUser(user: User) {}

createUser({ name: "gaurav", email: "gaurav@gmail.com", isActive: false });

// ok now i want return type also User 
function createUserr(user:User):User{
return { name: "", email: "", isActive: false }
}

export {};
