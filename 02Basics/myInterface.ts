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

const gaurav: User = {
  dbId: 33,
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
