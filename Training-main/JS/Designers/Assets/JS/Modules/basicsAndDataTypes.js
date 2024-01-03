import randomNumber, { showHide, resetTextBox } from "./commonModules/randomNumber.js";
/* Variables and datatypes
    datatypes:
        string
        number
        boolean
        array
        object

    variable are declared using the following three keywods:
        var
        let
        const
*/

// Basics and Datatypes (Int, Float)

class operations
{
    constructor() {
        this.randomNumberObj = new randomNumber();
    }
    // Take Input of two int numbers and Output it's Addition, Subtraction, Multiplication & Division.
    numbersOperations()
    {
        let fpResults = document.getElementById("fpResults");

        document.getElementById("fpOperationsSubmit").addEventListener("click", () => {
            let NumberOne = document.getElementById("fpFirstNumber").value;
            let NumberTwo = document.getElementById("fpSecondNumber").value;
            let resultString = '';

            resultString += `
                <tr><td>${NumberOne}</td><td>+</td><td>${NumberTwo}</td><td>${(parseInt(NumberOne) + parseInt(NumberTwo))}</td></tr>
                <tr><td>${NumberOne}</td><td>-</td><td>${NumberTwo}</td><td>${(parseInt(NumberOne) - parseInt(NumberTwo))}</td></tr>
                <tr><td>${NumberOne}</td><td>*</td><td>${NumberTwo}</td><td>${(parseInt(NumberOne) * parseInt(NumberTwo))}</td></tr>
                <tr><td>${NumberOne}</td><td>/</td><td>${NumberTwo}</td><td>${(parseInt(NumberOne) / parseInt(NumberTwo))}</td></tr>`;

            fpResults.innerHTML = resultString;
            showHide("First-Program-result", "block");
        });

        document.getElementById("fpOperationsReset").addEventListener("click", () => {
            resetTextBox(["fpFirstNumber", "fpSecondNumber"]);
            showHide("First-Program-result", "none");
        });
        
        document.getElementById("fpOperationsRandom").addEventListener("click", () => {
            document.getElementById("fpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
            document.getElementById("fpSecondNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
        });
    }

    // Input Radius of a circle and Output it's Diameter, Circumference, Area & Volume of Sphere (Float program).
    circleDetails()
    {
        let spResults = document.getElementById("spResults");

        document.getElementById("spOperationsSubmit").addEventListener("click", () => {
            let radius = document.getElementById("spFirstNumber").value;
            let resultString = '';

            resultString += `
                <tr><td>Diameter of circle with radius ${radius}</td><td>(radius * radius)</td><td>${(radius * 2)}</td></tr>
                <tr><td>Circumference of circle with radius ${radius}</td><td>(2 * 3.14 * radius)</td><td>${(2 * Math.PI * radius)}</td></tr>
                <tr><td>Area of circle with radius ${radius}</td><td>(3.14 * radius * radius)</td><td>${(Math.PI * radius * radius)}</td></tr>
                <tr><td>Volume Of Sphere of circle with radius ${radius}</td><td>((4 / 3) * 3.14 * (radius * radius * radius))</td><td>${( (4 / 3) * Math.PI * (radius * radius * radius))}</td></tr>`;

                spResults.innerHTML = resultString;
                showHide("Second-Program-result", "block");

        });

        document.getElementById("spOperationsReset").addEventListener("click", () => {
            resetTextBox(["spFirstNumber"]);
            showHide("Second-Program-result", "none");
        });

        document.getElementById("spOperationsRandom").addEventListener("click", () => {
            document.getElementById("spFirstNumber").value = this.randomNumberObj.randomNumberGenerator(100);
        });
    }
}


export { operations };