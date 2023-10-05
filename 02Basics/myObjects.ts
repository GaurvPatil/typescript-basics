const user = {
  name: "gaurav",
  email: "gaurav@gmail.com",
  isActive: "true",
};

// if function accepting object
function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "gaurav", isPaid: false });

// if function return object
function createCourse(): {} {
  return {};
}

// object with properties
function createCart(): { name: string; price: number } {
  return {
    name: "egg",
    price: 55,
  };
}

export {};
