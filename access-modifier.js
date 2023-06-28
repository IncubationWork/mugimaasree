class Car {
    constructor(make,model) {
        this._make = make; // private property
        this.model = model; // public property
    }

    startEngine() {
        console.log("Engine started"); 
    }
}