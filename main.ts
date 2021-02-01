
class Car {
    private carName: string;
    private color: string;
    private numberOfWheels: number = 4;
    private numberOfDoors: number;

    constructor(
        carName: string,
        color: string,
        numberOfWheels: number,
        numbeOfDoors: number
    ) {
        this.carName = carName;
        this.color = color;
        this.numberOfDoors = numbeOfDoors;
        this.numberOfWheels = numberOfWheels;
    }
    
    displayName() {
        console.log(this.carName);
    }


}

const mazda: Car = new Car("Mazda BT50", "RED", 4, 4);
// const mazda:Car = new Car();
console.log(mazda);

// This is not allowed 
// mazda.carName = "Mazda BT50";
// mazda.color = "RED";
// mazda.numberOfDoors = 4;


