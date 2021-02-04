
class Engine {
    public fuelType: 'Diseal' | 'Petrol';
    private _engineName: string;

    constructor() { }

    public get engineName(): string {
        return this._engineName;
    }
    public set engineName(value: string) {
        this._engineName = value;
    }

}

class Car extends Engine {
    private _carName: string;
    private color: string;
    private numberOfWheels: number = 4;
    private numberOfDoors: number;

    constructor(
        carName: string,
        color: string,
        numberOfWheels: number,
        numbeOfDoors: number
    ) {
        super()
        this._carName = carName;
        this.color = color;
        this.numberOfDoors = numbeOfDoors;
        this.numberOfWheels = numberOfWheels;
    }

}
class Plane extends Engine{

}

const mazda: Car = new Car("Mazda BT50", "RED", 4, 4);
mazda.fuelType = 'Diseal'
console.log(mazda);







