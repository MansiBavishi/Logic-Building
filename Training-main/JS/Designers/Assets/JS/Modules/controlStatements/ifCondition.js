import randomNumber, { showHide, resetTextBox } from "../commonModules/randomNumber.js";
// If Condition
class ifConditions
{
    constructor() {
        this.randomNumberObj = new randomNumber();
    }

    // Take input of two numbers and find Maximum from them.
    maxNumber()
    {
        let tpResultsMax = document.getElementById("tpResults");

        document.getElementById("tpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("tpFirstNumber").value;
            let NumberTwo = document.getElementById("tpSecondNumber").value;
            let resultString = '';

            let resultNumber = '0';

            if(parseInt(NumberOne) > parseInt(NumberTwo))
                resultNumber = `${NumberOne}`;
            else if (parseInt(NumberOne) < parseInt(NumberTwo))
                resultNumber = `${NumberTwo}`;
            else
                resultNumber = 'None as Both are Equal';

            resultString += `<tr><td>${NumberOne}</td><td><-- Check Maximum -- ></td><td>${NumberTwo}</td><td>${resultNumber}</td></tr>`;

            tpResultsMax.innerHTML = resultString;
            showHide("Third-Program-result", "block");

        })

        document.getElementById("tpOperationsReset").addEventListener("click", () => {
            resetTextBox(["tpFirstNumber", "tpSecondNumber"]);
            showHide("Third-Program-result", "none");
            
        })

        document.getElementById("tpOperationsRandom").addEventListener("click", () => {
            document.getElementById("tpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
            document.getElementById("tpSecondNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
        })

    }

    // Take input of a Number and Output check if it's even or odd.
    oddEvenNumber()
    {
        let fopResults = document.getElementById("fopResults");

        document.getElementById("fopOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("fopFirstNumber").value;
            let resultString = '';

            let resultNumber = '0';
            if(NumberOne % 2 === 0)
                resultNumber = `${NumberOne} is Even...!`;
            else
                resultNumber = `${NumberOne} is Odd...!`;

            resultString = `<tr><td>${NumberOne}</td><td><-- Check Odd Even -- ></td><td>(Number % 2 == 0) is even else Odd</td><td>${resultNumber}</td></tr>`;

            fopResults.innerHTML = resultString;
            showHide("Fourth-Program-result", "block");

        })

        document.getElementById("fopOperationsReset").addEventListener("click", () => {
            resetTextBox(["fopFirstNumber"]);
            showHide("Fourth-Program-result", "none");

        })

        document.getElementById("fopOperationsRandom").addEventListener("click", () => {
            document.getElementById("fopFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
            document.getElementById("fopSecondNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
        })

    }
}

export { ifConditions };