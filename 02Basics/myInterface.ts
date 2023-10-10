// similar like type

interface User {
  readonly dbId: number;
  emailId: string;
  userId: number;
  googleId?: string;

  // startTrail:()=> string
  // or

  startTrail(): string;
  getCoupon(coupanName: string, value: number): number;
}

interface User {
  githubToken: string;
}

// inheritance
// we can extend multiple interfces
// example = interface Admin extends User , Another , Xyz {...}
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const gaurav: User = {
  dbId: 33,
  githubToken: "github",
  emailId: "g@g.com",
  userId: 2356,
  startTrail: () => {
    return "hello gaurav";
  },

  getCoupon: (name: "gaurav13", off: 10) => {
    return 10;
  },
};

const ramesh: Admin = {
  dbId: 33,
  githubToken: "github",
  role: "admin",
  emailId: "g@g.com",
  userId: 2356,
  startTrail: () => {
    return "hello gaurav";
  },

  getCoupon: (name: "gaurav13", off: 10) => {
    return 10;
  },
};

export {};
