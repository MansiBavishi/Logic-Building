export function Animal(name) { //Class
	// Property
	this.name = name;
	// Property Method
	this.bark = () => {
		console.log("Woof...!");
	}
}
// Prototype Method
Animal.prototype.speak = function() {
	console.log('Generic animal sound');
};

// Class / Constructor
function Dog(name, breed) {
	Animal.call(this, name);
	this.breed = breed; 
}

// Extends method / Inheritance
Dog.prototype = Object.create(Animal.prototype);
// default assigning of Constructor
Dog.prototype.constructor = Dog;

// Dog's Prototype Method
Dog.prototype.bark = function() {
	console.log('Woof!');
};

// Instance of Dog
let myDog = new Dog('Buddy', 'Labrador');
// Method Calling.
myDog.speak(); // Generic animal sound
myDog.bark();  // Woof!