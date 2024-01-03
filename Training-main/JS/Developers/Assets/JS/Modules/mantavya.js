class Shapes {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.rectangle = new Shapes.Rectangle(this.width, this.height);
    }

    static Rectangle = class {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.square = new Shapes.Rectangle.Square(this.width);
        }

        printRectangle() {
            console.log(`%cArea of Rectangle: ${this.width * this.height}`, "background: green; color: white; padding: 2rem");
            this.square.printSquare();
        }

        static Square = class {
            constructor(width) {
                this.width = width;
                this.circle = new Shapes.Rectangle.Square.Circle(this.width);
            }

            printSquare() {
                console.log(`%cArea of Square: ${this.width * this.width}`, "background: blue; color: white; padding: 6rem");
                this.circle.printCircle();
            }

            static Circle = class {
                constructor(width) {
                    this.raius = width * 2;
                }

                printCircle() {
                    console.log(`%cArea of Circle: ${3.14 * this.raius * this.raius}`, "background: red; color: white; padding: 6rem; border-radius: 50%; border: 3px solid #000;" );
                }
            }
        }
    }
}
export { Shapes };