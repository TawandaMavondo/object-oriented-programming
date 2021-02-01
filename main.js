var Car = /** @class */ (function () {
    function Car(carName, color, numberOfWheels, numbeOfDoors) {
        this.numberOfWheels = 4;
        this.carName = carName;
        this.color = color;
        this.numberOfDoors = numbeOfDoors;
        this.numberOfWheels = numberOfWheels;
    }
    Car.prototype.displayName = function () {
        console.log(this.carName);
    };
    return Car;
}());
var mazda = new Car("Mazda BT50", "RED", 4, 4);
// const mazda:Car = new Car();
console.log(mazda);
// This is not allowed 
// mazda.carName = "Mazda BT50";
// mazda.color = "RED";
// mazda.numberOfDoors = 4;
//# sourceMappingURL=main.js.map