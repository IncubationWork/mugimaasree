let a= new Employee;
let b=new Person;
class Person{
    constructor(name,age,sex){
        this.name=name;
        this.age=age;
        this.sex=sex;
   }
   getVoiceType(){
        if(this.age>50&&this.sex==="male")
            {
                return "hourse";
            }
        if(this.age<10)
            {
                return "soft";
            }
   }
}
class Employee extends Person{
    constructor(id,name,age,sex){
        super(name,age,sex);
        this.id=id;
    }
}
a.prototype.getVoiceType===b;
console.log(prototype);