import randomNumber from "../commonModules/randomNumber.js";
// Do While Loop
class doWhileLoop
{
    constructor() { this.randomNumberObj = new randomNumber(); }

    // Take input of an integer and output number of digits in the integer.
    // Take input of an integer and output number of digits in the integer.
    numberOfDigits()
    {
        let elvpResultNum = document.getElementById("elvpResultNum");

        document.getElementById("elvpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("elvpFirstNumber").value;
            let DupNumberOne = NumberOne;

            let resultNumber = 0;

            do
            {
                DupNumberOne = parseInt(DupNumberOne / 10);
                resultNumber++;
            }while(DupNumberOne != 0);

            elvpResultNum.innerHTML = `There are / is ${resultNumber} number of digits in ${NumberOne}...!`;
        })

        document.getElementById("elvpOperationsReset").addEventListener("click", () => {

            document.getElementById("elvpFirstNumber").value = 0;

            elvpResultNum.innerHTML = `There are / is 0 number of digits in ${NumberOne}...!`;
            
        })

        document.getElementById("elvpOperationsRandom").addEventListener("click", () => {
            document.getElementById("elvpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(1000000);
        })
    }

}

export { doWhileLoop };