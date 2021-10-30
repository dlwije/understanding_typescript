/* Interfaces */
//interfaces are only in typescript
//interfaces can be extend
//can extend more than one interfaces by separating comma
//but in class inherit(extend) can only do by one class
interface Member {
  //can add readonly property in interfaces. but cannot use access modifiers
  //? for optional
  name: string;
  age: number;
  outputName?: string;

  greet(phrase: string): void;
}

let user1: Member;

user1 = {
  name: "Dinesh",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there, this is");

/* Interfaces with classes */
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

//now greetable work as a class reference and type also
let user2: Greetable;

user2 = new Person("Lakmal");

user2.greet("Hello there - I am");

console.log(user2);

/* Interfaces can be defined as a function */
// type AddFn = (a: number, b: number) => number;//instead of this we can use interface also
//we can ? mark for tell to this is optional. this applies to methods also
interface AddFn {
  (a: number, b: number): number; // this is a function type and this how look like
}

let add_fn: AddFn;

add_fn = (n1: number, n2: number) => {
  return n1 + n2;
};
