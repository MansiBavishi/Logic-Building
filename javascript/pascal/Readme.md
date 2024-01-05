# Question

Read a Number that should be atleast 4 digit long then apply permutation and combination on it and find prime number from it. Show pascal triangle and highlight prime number of the combination which are in pascal triangle and also show missing numbers and error ratio of it.

## code and Explaination

- _input from user_

const userInput = prompt("Enter a 4-digit number: ");

- _generate all the combinations_

function generateCombinations(digits) {
let singleDigits = digits.slice();
let doubleDigits = [];
for (let i = 0; i < digits.length; i++) {
for (let j = 0; j < digits.length; j++) {
if (i !== j) {
doubleDigits.push(digits[i] _ 10 + digits[j]);
}
}
}
let tripleDigits = [];
for (let i = 0; i < digits.length; i++) {
for (let j = 0; j < digits.length; j++) {
for (let k = 0; k < digits.length; k++) {
if (i !== j && i !== k && j !== k) {
tripleDigits.push(digits[i] _ 100 + digits[j] _ 10 + digits[k]);
}
}
}
}
let fourDigits = [];
for (let i = 0; i < digits.length; i++) {
for (let j = 0; j < digits.length; j++) {
for (let k = 0; k < digits.length; k++) {
for (let l = 0; l < digits.length; l++) {
if (
i !== j &&
i !== k &&
i !== l &&
j !== k &&
j !== l &&
k !== l
) {
fourDigits.push(
digits[i] _ 1000 + digits[j] _ 100 + digits[k] _ 10 + digits[l]
);
}
}
}
}
}
let alldigits = singleDigits.concat(doubleDigits, tripleDigits, fourDigits);
return alldigits;
}

- _prime numbers from combinations_

function getPrimeNumbersFromArray(numbers) {
function isPrime(num) {
if (num <= 1) return false;
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return false;
}
return true;
}
return numbers.filter((num) => isPrime(num));
}

- _pascal triangle_

  function generatePascalsTriangleUntilElement(targetElement) {
  const triangle = [];
  let currentRow = [1];
  while (!currentRow.includes(targetElement)) {
  triangle.push(currentRow);
  const nextRow = [1];
  for (let i = 1; i < currentRow.length; i++) {
  nextRow[i] = currentRow[i - 1] + currentRow[i];
  if (currentRow[i] >= targetElement) {
  return triangle;
  }
  }
  nextRow.push(1);
  currentRow = nextRow;
  }
  }

- _set pascal triangle on html_

function generatePascalsTriangleHTML() {
const triangleContainer = document.getElementById("pascals-triangle");
finalResult.forEach((rowValues) => {
const rowDiv = document.createElement("div");
rowDiv.classList.add("row");
rowValues.forEach((value) => {
const cellDiv = document.createElement("div");
if (primeArray.includes(value)) {
cellDiv.classList.add("highlight");
} else {
cellDiv.classList.add("cell");
}
cellDiv.textContent = value;
rowDiv.appendChild(cellDiv);
});
triangleContainer.appendChild(rowDiv);
});
}

- _set missing values and error ratio_

var missingElement = document.getElementById("missingElement");
missingElement.innerHTML = "<p>" + missingPrimeNums.join("</p><p>") + "</p>";

const errorRatioRate = missingPrimeNums.length / primeArray.length;
var errorRatio = document.getElementById("errorRatio");
errorRatio.innerHTML = "<p>" + errorRatioRate + "</p>";

## Author

- Mansi Bavishi
