class Person{
    constructor(name,age,sex)
        {
            this.name=name;
            this.age=age;
            this.sex=sex;
        }
    getVoiceType(){
            if(this.age>50 && this.sex==="male")
                {
                    return "hoarse";
                }
            else if (this.age<18 && this.sex==="male")
                {
                    return "soft";
                }
            }
        }
class Employee extends Person{
    constructor(name,age,sex,id)
        {
            super(name,age,sex)
            this.id=id;
        }
    }
let a= new Employee("suthan",17,"male",1);
let b= new Employee("mugunthan",51,"male",2);
console.log(a.getVoiceType());
console.log(b.getVoiceType());
console.log(a.getVoiceType()===b.getVoiceType());
console.log(a.getVoiceType().prototype===b.getVoiceType().prototype);