class Shape {
	area() {
		console.log('Calculating area...');
	}
}

class Circle extends Shape {
	area() {
		console.log('Calculating area of a circle...');
	}
}

class Square extends Shape {
    	area() {
		console.log('Calculating area of a square...');
	}
}

let circle = new Circle();
let square = new Square();

circle.area();  // Calculating area of a circle...
square.area();  // Calculating area of a square...
