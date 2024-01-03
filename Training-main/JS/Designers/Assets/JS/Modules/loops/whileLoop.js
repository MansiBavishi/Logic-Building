import randomNumber from "../commonModules/randomNumber.js";
// While Loop
class whileLoops
{
    constructor() { this.randomNumberObj = new randomNumber(); }
    
    // Take input of an integer and output it's factorial value.
    factValue()
    {
        let sepResultsFact = document.getElementById("sepResultFact");

        document.getElementById("sepOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("sepFirstNumber").value;

            let resultNumber = '0';

            if(NumberOne === 0)
                sepResultsFact.innerHTML = `Factorial of ${NumberOne} is always : 1...!`;
            else
            {
                let controlvariable = 1;
                while(controlvariable <= NumberOne)
                {
                    resultNumber *= controlvariable;
                    controlvariable++;
                }
            }

            sepResultsFact.innerHTML = `Factorial of ${NumberOne} is : ${resultNumber}...!`;

        })

        document.getElementById("sepOperationsReset").addEventListener("click", () => {

            document.getElementById("sepFirstNumber").value = "";

            sepResultsFact.innerHTML = `Factorial : `;
            
        })

        document.getElementById("sepOperationsRandom").addEventListener("click", () => {
            document.getElementById("sepFirstNumber").value = this.randomNumberObj.randomNumberGenerator(20);
        })
    } 

    // Print Fibonacci series upto Nth number.
    fibValueUptoNthNumber()
    {
        let epResultFib = document.getElementById("epResultFib");

        document.getElementById("epOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("epFirstNumber").value;

            let resultNumber = 0;

            if(NumberOne == 0)
                epResultFib.innerHTML = `Fibonacci Series of ${NumberOne} is always : 0...!`;
            else
            {
                let fib = 1;
                let controlvariable = 0;
                let controller = 0;
                while(controlvariable <= NumberOne)
                {
                    resultNumber += `\t${fib}`;
                    fib = fib + controller;
		            controller = fib - controller;
                    controlvariable++;
                }
            }

            epResultFib.innerHTML = `Fibonacci Series of ${NumberOne} is : ${resultNumber}...!`;

        })

        document.getElementById("epOperationsReset").addEventListener("click", () => {

            document.getElementById("epFirstNumber").value = 0;

            epResultFib.innerHTML = `Fibonacci Series : `;
            
        })

        document.getElementById("epOperationsRandom").addEventListener("click", () => {
            document.getElementById("epFirstNumber").value = this.randomNumberObj.randomNumberGenerator(20);
        })
    }

    // Print Fibonacci series upto Nth terms.
    fibValueUptoNTerms()
    {
        let npResultFib = document.getElementById("npResultFib");

        document.getElementById("npOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("npFirstNumber").value;

            let resultNumber = 0;

            if(NumberOne == 0)
                npResultFib.innerHTML = `Fibonacci Series of ${NumberOne} is always : 0...!`;
            else
            {
                let fib = 1;
                let controlvariable = 0;
                let controller = 0;
                while(controlvariable <= NumberOne)
                {
                    if(fib < NumberOne)
                    {
                        resultNumber += `\t${fib}`;
                        fib = fib + controller;
                        controller = fib - controller;
                        controlvariable++;
                    }
                    else{
                        break;
                    }
                }
            }

            npResultFib.innerHTML = `Fibonacci Series of ${NumberOne} is : ${resultNumber}...!`;

        })

        document.getElementById("npOperationsReset").addEventListener("click", () => {

            document.getElementById("npFirstNumber").value = 0;

            npResultFib.innerHTML = `Fibonacci Series : `;
            
        })

        document.getElementById("npOperationsRandom").addEventListener("click", () => {
            document.getElementById("npFirstNumber").value = this.randomNumberObj.randomNumberGenerator(20);
        })
    }

    // Print Fibonacci series with 6 terms on each line upto N numbers.
    fibValueSixTerms()
    {
        let tepResultFib = document.getElementById("tepResultFib");

        document.getElementById("tepOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("tepFirstNumber").value;

            let resultNumber = 0;

            if(NumberOne == 0)
                tepResultFib.innerHTML = `Fibonacci Series of ${NumberOne} is always : 0...!`;
            else
            {
                let fib = 1;
                let controlvariable = 0;
                let controller = 0;
                let counter = 1;
                while(controlvariable <= NumberOne)
                {
                    if(counter !== 6)
                        resultNumber += `\t${fib}`
                    else
                    {
                        resultNumber += `<br>${fib}`;
                        counter = 0;
                    }
                    fib = fib + controller;
                    controller = fib - controller;
                    controlvariable++;
                    counter++;
                }
            }

            tepResultFib.innerHTML = `Fibonacci Series of ${NumberOne} is : ${resultNumber}...!`;

        })

        document.getElementById("tepOperationsReset").addEventListener("click", () => {

            document.getElementById("tepFirstNumber").value = 0;

            tepResultFib.innerHTML = `Fibonacci Series : `;
            
        })

        document.getElementById("tepOperationsRandom").addEventListener("click", () => {
            document.getElementById("tepFirstNumber").value = this.randomNumberObj.randomNumberGenerator(20);
        })
    }

    // Take input of an integer and output number of digits in the integer.
    numberOfDigits()
    {
        let elpResultNum = document.getElementById("elpResultNum");

        document.getElementById("elpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("elpFirstNumber").value;
            let DupNumberOne = NumberOne;

            let resultNumber = 0;

            if(NumberOne == 0)
                elpResultNum.innerHTML = `There are / is ${resultNumber} number of digits in ${NumberOne}...!`;
            else
            {
                while(DupNumberOne != 0)
                {
                    DupNumberOne = parseInt(DupNumberOne / 10);
                    resultNumber++;
                }
            }

            elpResultNum.innerHTML = `There are / is ${resultNumber} number of digits in ${NumberOne}...!`;
        })

        document.getElementById("elpOperationsReset").addEventListener("click", () => {

            document.getElementById("elpFirstNumber").value = 0;

            elpResultNum.innerHTML = `There are / is 0 number of digits in ${NumberOne}...!`;
            
        })

        document.getElementById("elpOperationsRandom").addEventListener("click", () => {
            document.getElementById("elpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(1000000);
        })
    }

    // Take input of a number and print Reverse of it.
    reverseOfNumber()
    {
        let twpResultNum = document.getElementById("twpResultNum");

        document.getElementById("twpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("twpFirstNumber").value;
            let oriNumberOne = NumberOne;

            let reverse = 0;

            if(NumberOne == 0)
                twpResultNum.innerHTML = `The reverse of ${oriNumberOne} is ${reverse}...!`;
            else
            {
                while (NumberOne != 0)
                {
                    reverse = parseInt(reverse * 10 + parseInt(NumberOne % 10));
                    NumberOne = parseInt(NumberOne / 10);
                }
            }

            twpResultNum.innerHTML = `The reverse of ${oriNumberOne} is ${reverse}...!`;
        })

        document.getElementById("twpOperationsReset").addEventListener("click", () => {

            document.getElementById("twpFirstNumber").value = 0;

            twpResultNum.innerHTML = `The reverse of ${oriNumberOne} is ${reverse}...!`;
            
        })

        document.getElementById("twpOperationsRandom").addEventListener("click", () => {
            document.getElementById("twpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(1000000);
        })
    }

    // Take input of an integer and Determine if it's palindrome or not.
    palindromeNumber()
    {
        let thpResultNum = document.getElementById("thpResultNum");

        document.getElementById("thpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("thpFirstNumber").value;
            let oriNumberOne = NumberOne;

            let reverse = 0;
            let answerString = '';

            if(NumberOne < 100)
                thpResultNum.innerHTML = `There is some error in input, please enter a number greater than 2 digits in it...!`;
            else
            {
                while (NumberOne != 0)
                {
                    reverse = parseInt(reverse * 10 + parseInt(NumberOne % 10));
                    NumberOne = parseInt(NumberOne / 10);
                }
            }

            answerString = parseInt(oriNumberOne) === reverse
                ?
                    `The Given Number ${oriNumberOne} is a Palindrome...!`
                :
                    `The Given Number ${oriNumberOne} is not a Palindrome...!`;
            
            thpResultNum.innerHTML = answerString;
        })

        document.getElementById("thpOperationsReset").addEventListener("click", () => {

            document.getElementById("thpFirstNumber").value = 0;

            thpResultNum.innerHTML = `The Given Number`;
            
        })

        document.getElementById("thpOperationsRandom").addEventListener("click", () => {
            document.getElementById("thpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(1000000);
        })
    }

    // Take input of an integer and Determine if it's Armstrong or not.
    armstrongNumber()
    {
        let foupResultNum = document.getElementById("foupResultNum");

        document.getElementById("foupOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("foupFirstNumber").value;
            let oriNumberOne = NumberOne;

            let armstrong = 0;
            let answerString = '';

            let resultNumber = parseInt(String(NumberOne).length);

            if(NumberOne < 100)
                foupResultNum.innerHTML = `There is some error in input, please enter a number greater than 2 digits in it...!`;
            else
            {
                while (NumberOne != 0)
                {
                    armstrong = (armstrong + parseInt(NumberOne % 10) ** resultNumber);
                    NumberOne = parseInt(NumberOne / 10);
                }
            }

            answerString = parseInt(oriNumberOne) === armstrong
                ?
                    `The Given Number ${oriNumberOne} is an Armstrong...!`
                :
                    `The Given Number ${oriNumberOne} is not an Armstrong...!`;
            
            foupResultNum.innerHTML = answerString;
        })

        document.getElementById("foupOperationsReset").addEventListener("click", () => {

            document.getElementById("foupFirstNumber").value = 0;

            foupResultNum.innerHTML = `The Given Number`;
            
        })

        document.getElementById("foupOperationsRandom").addEventListener("click", () => {
            document.getElementById("foupFirstNumber").value = this.randomNumberObj.randomNumberGenerator(1000000);
        })
    }

    // Take input of an integer and Determine if it's Prime or not.
    primeNumber()
    {
        let fifpResultNum = document.getElementById("fifpResultNum");

        document.getElementById("fifpOperationsSubmit").addEventListener("click", () => {

            let NumberOne = document.getElementById("fifpFirstNumber").value;

            let answerString = '';
            let controlVariable = 2;
            let count = 0;

            if(NumberOne < 2)
                fifpResultNum.innerHTML = `There is some error in input, please enter a number greater than 2 to check if it's prime or not...!`;
            else
            {
                while(controlVariable <= NumberOne / 2)
                {
                    if(NumberOne % controlVariable == 0)
                    {
                        count = 1;
                        break;
                    }
                    controlVariable++;
                }
             
                answerString = count === 0
                ?
                    `The Given Number ${NumberOne} is Prime...!`
                :
                    `The Given Number ${NumberOne} is not Prime...!`;
            }
            
            fifpResultNum.innerHTML = answerString;
        })

        document.getElementById("fifpOperationsReset").addEventListener("click", () => {

            document.getElementById("fifpFirstNumber").value = 0;

            fifpResultNum.innerHTML = `The Given Number`;
            
        })

        document.getElementById("fifpOperationsRandom").addEventListener("click", () => {
            document.getElementById("fifpFirstNumber").value = this.randomNumberObj.randomNumberGenerator(1000000);
        })
    }

}

export { whileLoops };