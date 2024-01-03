import randomNumber from "../commonModules/randomNumber.js";
// For Loop & Incerement and Decerement Operators
class forLoops
{
    constructor() { this.randomNumberObj = new randomNumber(); }
    
    /* Take input of an integer and print in single line upto N.
        Output1 1 2 1 2 3 1 2 3 4 . . . N
    */
    printSeriesOne()
    {
        let sevpResultNum = document.getElementById("sevpResultNum");

        document.getElementById("sevpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("sevpFirstNumber").value;            
            let resultString = 'Series : ';

            for(let i = 1; i <= NumberOne; i++)
                for(let j = 1; j <= i; j++)
                    resultString += ` ${j}`;

            sevpResultNum.innerHTML = resultString;
        })

        document.getElementById("sevpOperationsReset").addEventListener("click", () => {

            document.getElementById("sevpFirstNumber").value = 0;

            sevpResultNum.innerHTML = `Series : `;
            
        })

        document.getElementById("sevpOperationsRandom").addEventListener("click", () => {
            document.getElementById("sevpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10);
        })
    }

    /* Take input of a number and Print following Series upto N number.
        1
        12
        123
        1234
    */
    printSeriesTwo()
    {
        let eigpResultNum = document.getElementById("eigpResultNum");

        document.getElementById("eigpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("eigpFirstNumber").value;            
            let resultString = 'Series :<br>';

            for(let i = 1; i <= NumberOne; i++)
            {
                for(let j = 1; j <= i; j++)
                    resultString += `${j}`;
                resultString += `<br>`;
            }
            eigpResultNum.innerHTML = resultString;
        })

        document.getElementById("eigpOperationsReset").addEventListener("click", () => {

            document.getElementById("eigpFirstNumber").value = 0;

            eigpResultNum.innerHTML = `Series :<br>`;
            
        })

        document.getElementById("eigpOperationsRandom").addEventListener("click", () => {
            document.getElementById("eigpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10);
        })
    }


    /* Take input of a number and Print following Series upto N number.
        *
        **
        ***
        ****
    */
    printSeriesThree()
    {
        let ninpResultNum = document.getElementById("ninpResultNum");

        document.getElementById("ninpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("ninpFirstNumber").value;            
            let resultString = 'Series :<br>';

            for(let i = 1; i <= NumberOne; i++)
            {
                for(let j = 1; j <= i; j++)
                    resultString += `*`;
                resultString += `<br>`;
            }
            ninpResultNum.innerHTML = resultString;
        })

        document.getElementById("ninpOperationsReset").addEventListener("click", () => {

            document.getElementById("ninpFirstNumber").value = 0;

            ninpResultNum.innerHTML = `Series :<br>`;
            
        })

        document.getElementById("ninpOperationsRandom").addEventListener("click", () => {
            document.getElementById("ninpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10);
        })
    }


    /* Take input of a number and Print following Series upto N number.
        1
        22
        333
        4444
    */
    printSeriesFour()
    {
        let twepResultNum = document.getElementById("twepResultNum");

        document.getElementById("twepOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("twepFirstNumber").value;            
            let resultString = 'Series :<br>';

            for(let i = 1; i <= NumberOne; i++)
            {
                for(let j = 1; j <= i; j++)
                    resultString += `${i}`;
                resultString += `<br>`;
            }
            twepResultNum.innerHTML = resultString;
        })

        document.getElementById("twepOperationsReset").addEventListener("click", () => {

            document.getElementById("twepFirstNumber").value = 0;

            twepResultNum.innerHTML = `Series :<br>`;
            
        })

        document.getElementById("twepOperationsRandom").addEventListener("click", () => {
            document.getElementById("twepFirstNumber").value = this.randomNumberObj.randomNumberGenerator(10);
        })
    }


    /* Take input of a number and Print following Series upto N number.
        *
        * *
        * * *
        * * * *
    */


    /* Take input of a number and Print following Series upto N number.
        1
        2 2
        3 3 3
        4 4 4 4
    */

    /* Take input of a number and Print following Series upto N number.
         *
        * *
       * * *
      * * * *
       * * *
        * *
         * 
    */

    /* Take input of a number and Print following Series upto N number.
            1
          1 2 1
        1 2 3 2 1
      1 2 3 4 3 2 1
    */

    /* Take input of a number and Print following Series upto N number.
                     1
                   2 3 2
                 3 4 5 4 3
               4 5 6 7 6 5 4
             5 6 7 8 9 8 7 6 5
          6 7 8 9 10 11 10 9 8 7 6
      7 8 9 10 11 12 13 12 11 10 9 8 7
    */

    /* Take input of a number and Print following Series upto N number.
                   1
                 2 3 2
               3 4 5 4 3
             4 5 6 7 6 5 4
           5 6 7 8 9 8 7 6 5
         6 7 8 9 0 1 0 9 8 7 6
       7 8 9 0 1 2 3 2 1 0 9 8 7
    */


    /* Take input of Length and Breath of a rectangle and Print it in the following format.
        *      *      *      *      *
        *                           *
        *                           *
        *      *      *      *      *
    */


    // Print List of prime numbers upto N.


    // Print List of numbers that are fibonacci and prime upto N.


    // Take an integer input and check if it's in Increasing Order or not.


    /* Take input of Length and Breath of a rectangle and Print it in the following format.
        If n = 5
        1 1 1 1 1
        1 2 2 2 1
        1 2 2 2 1
        1 2 2 2 1
        1 1 1 1 1

        If n = 6
        1 1 1 1 1 1
        1 2 2 2 2 1
        1 2 3 3 2 1
        1 2 3 3 2 1
        1 2 2 2 2 1
        1 1 1 1 1 1
    */

}

export { forLoops };