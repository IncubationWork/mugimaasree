class Vehicle {
    constructor(type,name,price,fuel) {
        this.type = type;
        this.name=name;
        this.price=price;
        this.fuel=fuel;
        this.speed = 0;
    }

    accelerate(speedChange) {
        this.speed += speedChange;
    }

    brake(speedChange) {
        this.speed -= speedChange;
        if(this.speed < 0) {
            this.speed = 0;
        }
    }

    getDescription() {
        return "Type:" + this.type + " " + "Name:" + this.name + " " + "Price:" + this.price + " " + "Fuel:" + this.fuel + " " + "Speed:" + this.speed + "mph";
    }
}

class Bike extends Vehicle {
    constructor(type,name,price,fuel) {
        super(type,name,price,fuel);
    }
}

class Car extends Vehicle {
    constructor(type,name,price,fuel) {
        super(type,name,price,fuel);
    }
}

class Bus extends Vehicle {
    constructor(type,name,price,fuel) {
        super(type,name,price,fuel);
    }
}


const bike = new Bike("Bike","Royal Enfield","1Lakh","petrol");
bike.accelerate(20);
bike.accelerate(-20);
console.log(bike.getDescription());

const car1 = new Car("Car","Hyundai","75Lakh","Disal");
car1.accelerate(50);
console.log(car1.getDescription());

const bus = new Bus("Bus","Yutong","30Lakh","petrol");
bus.accelerate(30);
bus.accelerate(20);
console.log(bus.getDescription());