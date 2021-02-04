var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Object.defineProperty(Engine.prototype, "engineName", {
        get: function () {
            return this._engineName;
        },
        set: function (value) {
            this._engineName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(carName, color, numberOfWheels, numbeOfDoors) {
        var _this = _super.call(this) || this;
        _this.numberOfWheels = 4;
        _this._carName = carName;
        _this.color = color;
        _this.numberOfDoors = numbeOfDoors;
        _this.numberOfWheels = numberOfWheels;
        return _this;
    }
    return Car;
}(Engine));
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Plane;
}(Engine));
var mazda = new Car("Mazda BT50", "RED", 4, 4);
mazda.fuelType = 'Diseal';
console.log(mazda);
//# sourceMappingURL=main.js.map