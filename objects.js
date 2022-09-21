// Objects

//Factories Function

function createFacebookUser(id, name, age, address) {
  let newUser = {
    id: id,
    name: name,
    age: age,
    address: address,
  };
  return newUser;
}

//constructor function

function CreateStudent(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

let studentSemion = new CreateStudent(1, "Semion", 15);

let facebookUser_Semion = createFacebookUser(1, "Semion", 12, "Karmiel Israel");
let facebookUser_Tomer = createFacebookUser(2, "Tomer", 12, "Karmiel Israel");

// console.log(facebookUser_Semion);

class Student {
  constructor(id, name, age, play) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.play = play;
  }
  talk() {
    console.log("my name is " + this.name);
  }
  cosher() {
    console.log(this.play);
  }
}

// let std1 = new Student(12, "Omri", 21, "jumping");
// console.log(std1);
// std1.talk();

// let student = {
//   name: "Semion",
//   age: 20,
//   address: "Karmiel Israel",
//   coverImagesL: ["image2", "link-image3"],
//   profileImages: ["c:/image3"],
//   selectedProfileImage: "c:/image3",
//   friendIds: [2, 3, 4, 5],
// };

// let result = Math.pow(2, 3);
// console.log(result);

class MyMath {
  constructor() {}

  static sum(x, y) {
    return x + y;
  }
  static sub(x, y) {
    return x - y;
  }
}

// let num1 = MyMath.sum(4, 6);
// console.log(num1);

class Car {
  #license; //private variable
  constructor(license, color, id, year) {
    this.#license = license;
    this.color = color;
    this.id = id;
    this.year = year;
  }
  drive() {
    console.log("Driving");
  }
  stop() {
    console.log("Stop");
  }
  showLicense() {
    console.log(this.#license);
  }
}

let Honda = new Car(123, "Blue", 1, 2010);

// console.log(Honda);
// Honda.showLicense();
function sayHi() {
  console.log("Hi!");
}
module.exports = { Car, sayHi };
