// basicsAndDataTypes
import { operations } from './Modules/basicsAndDataTypes.js';

// Control Statements Programs
import { ifConditions, nestedIfElseConditions } from './Modules/controlStatements/index.js';

// Loops
import { whileLoops, doWhileLoop, forLoops } from './Modules/loops/index.js';

// Strings
import { Strings } from './Modules/strings/strings.js';

(function(){
    // basicsAndDataTypes
    const operationsObj = new operations();
    operationsObj.numbersOperations();
    operationsObj.circleDetails();

    // Control Statements Programs
        // if Conditions
    const ifConditionsObj = new ifConditions();
    ifConditionsObj.maxNumber();
    ifConditionsObj.oddEvenNumber();

        // Nested If Else
    const nestedIfElseConditionsObj = new nestedIfElseConditions();
    nestedIfElseConditionsObj.maxNumber();
    nestedIfElseConditionsObj.tempCheck();

    // Loops
        // while
    const whileLoopsObj = new whileLoops()
    whileLoopsObj.factValue();
    whileLoopsObj.fibValueUptoNthNumber();
    whileLoopsObj.fibValueUptoNTerms();
    whileLoopsObj.fibValueSixTerms();
    whileLoopsObj.numberOfDigits();
    whileLoopsObj.reverseOfNumber();
    whileLoopsObj.palindromeNumber();
    whileLoopsObj.armstrongNumber();
    whileLoopsObj.primeNumber();
    
        // doWhile
    const doWhileLoopObj = new doWhileLoop();
    doWhileLoopObj.numberOfDigits();

        // for
    const forLoopsObj = new forLoops();
    forLoopsObj.printSeriesOne();
    forLoopsObj.printSeriesTwo();
    forLoopsObj.printSeriesThree();
    forLoopsObj.printSeriesFour();

    // Strings
    const stringObj = new Strings();
    stringObj.counter();
})();