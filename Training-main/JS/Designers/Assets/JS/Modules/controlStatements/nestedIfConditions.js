import randomNumber, { showHide } from "../commonModules/randomNumber.js";
// Nested If Else and Boolean Operators
class nestedIfElseConditions
{
    constructor() {
        this.randomNumberObj = new randomNumber();
    }

    // Take input of Three Numbers and find Maximum from them without using Boolean operators.
    maxNumber()
    {
        let fipResultsMax = document.getElementById("fipResultsMax");

        document.getElementById("fipOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("fipFirstNumber").value;
            let NumberTwo = document.getElementById("fipSecondNumber").value;
            let NumberThree = document.getElementById("fipThirdNumber").value;

            let resultNumber = '0';
            if(NumberOne > NumberTwo)
                if(NumberOne > NumberThree)
                    resultNumber = `\tNumber One : ${NumberOne}`;
                else
                    resultNumber = `\tNumber Three : ${NumberThree}`;
            else
                if(NumberTwo > NumberThree)
                    resultNumber = `\tNumber Two : ${NumberTwo}`;
                else
                    resultNumber = `\tNumber Three : ${NumberThree}`;

            fipResultsMax.innerHTML = `Maximum Number from ${NumberOne},  ${NumberTwo} and ${NumberThree} is : \t` + resultNumber;

        })

        document.getElementById("fipOperationsReset").addEventListener("click", () => {

            document.getElementById("fipFirstNumber").value = "";
            document.getElementById("fipSecondNumber").value = "";
            document.getElementById("fipThirdNumber").value = "";

            fipResultsMax.innerHTML = `Maximum : `;
            
        })

        document.getElementById("fipOperationsRandom").addEventListener("click", () => {
            document.getElementById("fipFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
            document.getElementById("fipSecondNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
            document.getElementById("fipThirdNumber").value = this.randomNumberObj.randomNumberGenerator(10000000);
        })

    }

    /* Take input of an Integer and output Temperature value according to the following conditions.
        If Temp <= 0 output ""Freezing""
        If Temp is between 1 - 10 output ""Very Cold""
        If Temp is between 11 - 20 output ""Cold""
        If Temp is between 21 - 30 output ""Moderate""
        If Temp is >= 30 output ""Hot""
    */
    tempCheck()
    {
        let sipResultsMax = document.getElementById("sipResultTemp");

        document.getElementById("sipOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("sipFirstNumber").value;

            let resultNumber = '0';
            if(NumberOne >= 30)
                resultNumber = 'Hot';
            else
            {
                if(NumberOne >= 21)
                    resultNumber = 'Moderate';
                else
                {
                    if(NumberOne >= 11)
                        resultNumber = 'Cold';
                    else
                    {
                        if(NumberOne >= 1)
                            resultNumber = 'Very Cold';
                        else
                            resultNumber = 'Freezing';
                    }
                }
            }

            sipResultsMax.innerHTML = `Today's Temperature is : ${resultNumber}...!`;

        })

        document.getElementById("sipOperationsReset").addEventListener("click", () => {

            document.getElementById("sipFirstNumber").value = "";

            sipResultsMax.innerHTML = `Today's Temperature is : `;
            
        })

        document.getElementById("sipOperationsRandom").addEventListener("click", () => {
            document.getElementById("sipFirstNumber").value = this.randomNumberObj.randomNumberGenerator(60);
        })
    }    
}

export { nestedIfElseConditions };