class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    // create set and get methods for location
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, location, grade) {
        super(name, age, location);
        this.grade = grade;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm in grade ${this.grade}`);
    }
}

// export class student
module.exports = Student;
module.exports = Person;

//const student = new Student('Alice', 12, 'Miami', 6);
//student.greet(); // Hello, my name is Alice and I'm in grade 6

//console.log(student.name); // Alice
//console.log(student.location); // miami