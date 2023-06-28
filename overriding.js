class Vehicle {
    move() {
        return "Vehicle moves";
    }
}

class Car extends Vehicle {
    move() {
        return "Car moves";
    }
}

const car1 = new Vehicle();
console.log(car1.move());

const car2 = new Car();
console.log(car2.move());

