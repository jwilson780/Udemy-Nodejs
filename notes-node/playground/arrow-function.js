var square = x => x * x;
console.log(square(9));

var user = {
  name: "Jake",
  sayHi: () => {
    //should print undefined
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiAlt() {
    //when defining object literals use this syntax
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
