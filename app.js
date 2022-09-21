let { Car, sayHi } = require("./objects");
console.log("started");
let car = new Car(12, "Black", 13, 2015);

car.drive();
sayHi();
