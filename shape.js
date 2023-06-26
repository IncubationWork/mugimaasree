class Shape {
    constructor() {
        this.area='';
    }

    getArea() {
        return this.area;
    }

    getTotalSides() {
        throw new Error("You cannot create any abstract Shapes");
    }

    getDimension() {
        throw new Error("You cannot create any abstract Shapes");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius=radius;
    }

    getArea() {
        return Math.PI*this.radius*this.radius;
    }

    getTotalSides() {
        return 0;
    }

    getDimension() {
        return "Two Dimension";
    }
}

class Triangle extends Shape {
    constructor(base,height) {
        super();
        this.base=base;
        this.height=height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }

    getTotalSides() {
        return 3;
    }

    getDimension() {
        return "Two Dimension";
    }
}

class Rectangle extends Shape {
    constructor(length,width) {
        super();
        this.length=length;
        this.width=width;
    }

    getArea() {
        return this.length * this.width;
    }

    getTotalSides() {
        return 4;
    }

    getDimension() {
        return "Tow Dimension";
    }
}

const circle = new Circle(6);
console.log("The Area of a Circle is:" + circle.getArea());
console.log("The TotalSides:" + circle.getTotalSides());
console.log("The Dimension:" + circle.getDimension());

const triangle = new Triangle(3,5);
console.log("The Area of a Triangle is:" + triangle.getArea());
console.log("The TotalSides:" + triangle.getTotalSides());
console.log("The Dimension:" + triangle.getDimension());

const rectangle = new Rectangle(4,6);
console.log("The Area of a Rectangle is:" + rectangle.getArea());
console.log("The TotalSides:" + rectangle.getTotalSides());
console.log("The Dimension:" + rectangle.getDimension());
