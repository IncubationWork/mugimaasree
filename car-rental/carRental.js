/*class carRental {
  constructor(){
    console.log("car rentu");
    this.carId=34;
  }
}
let carRental1= new carRental(); */
class car{
    constructor(model,brand,price){
        this.carBrand=brand;
        this.carModel=model;
        this.price=price;
    }
}
class carRental{
    constructor(startDate,endDate,price){
      
        this.Price=price;
        this.StartDate=startDate;
        this.endDate=endDate;
    }
}
class sedans extends carRental{
    constructor(brand,model,price,startDate,endDate,carAvailable){
        super(brand,model,price,startDate,endDate);
        this.carAvailable=carAvailable;
    }
}
class SUV extends carRental{
    constructor(brand,model,price){
        super(brand,model,price);
    }
}
class luxury extends carRental{
    constructor(brand,model,price){
        super(brand,model,price);
    }
}
const rentalSystem = new rentalSystem();
rentalSystem.carRental(new sedans("Toyota","camry",1000,4));
rentalSystem.carRental(new SUV ("Honda", "CRV",7000));
rentalSystem.carRental(new luxury("maruthi","mahendra",2000));

class customer{
    constructor(name,email,phoneNo,address){
        this.name=name;
        this.email=email;
        this.phoneNo=phoneNo;
        this.address=address;
    }
}
class user extends customer{
    constructor(name,email,phoneNo,address,adhar){
        super(name,email,phoneNo,address);
        this.adhar=adhar;
    }
}
