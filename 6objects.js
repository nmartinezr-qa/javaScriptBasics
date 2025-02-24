// Description: Objects in JavaScript
// Run: node 6objects.js

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

// Accessing object properties
console.log(person.firstName);
console.log(person['firstName']);

// Adding new properties
person.national
person['nationality'] = 'US';
console.log(person);

// Deleting properties
delete person.eyeColor;
console.log(person);

// print full name
console.log(person.fullName()); // call it as a function
console.log(typeof(person.fullName));
// check if property exists
console.log('firstName' in person);

// Looping through object properties
// We are doing something like this: console.log(person['firstName']); on each iteration
for (let key in person) {
    // check if the property is a function and call it
    if (typeof(person[key]) === 'function') {
        console.log(person[key]());
    }else {
        console.log(person[key]);
    }
}

