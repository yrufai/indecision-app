class Person{
    constructor(name= "Anonymous", age= 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. I am ${this.name}!. `;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old. `;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major= major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}. `
        }
        return description;
    }     
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGretting(){
        let greeting = super.getGretting();
        if(this.hasHomeLocation()){
            greeting += `I"m visiting from ${this.homeLocation}`;
        }
        return greeting;
        
    }
}

const me = new Traveller("mahatma", 56, "bawku");
console.log(me.getGretting());

const other = new Traveller();
console.log(other.getGretting());