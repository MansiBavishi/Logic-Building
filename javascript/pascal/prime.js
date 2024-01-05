document.addEventListener("DOMContentLoaded", function () {
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

  function generateCombinations(digits) {
    let singleDigits = digits.slice();
    let doubleDigits = [];
    for (let i = 0; i < digits.length; i++) {
      for (let j = 0; j < digits.length; j++) {
        if (i !== j) {
          doubleDigits.push(digits[i] * 10 + digits[j]);
        }
      }
    }
    let tripleDigits = [];
    for (let i = 0; i < digits.length; i++) {
      for (let j = 0; j < digits.length; j++) {
        for (let k = 0; k < digits.length; k++) {
          if (i !== j && i !== k && j !== k) {
            tripleDigits.push(digits[i] * 100 + digits[j] * 10 + digits[k]);
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
                digits[i] * 1000 + digits[j] * 100 + digits[k] * 10 + digits[l]
              );
            }
          }
        }
      }
    }
    let alldigits = singleDigits.concat(doubleDigits, tripleDigits, fourDigits);
    return alldigits;
  }

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

  const userInput = prompt("Enter a 4-digit number: ");
  const digits = userInput.split("").map(Number);
  const permutations = generateCombinations(digits);
  const primeArray = getPrimeNumbersFromArray(permutations);
  primeArray.sort(function (a, b) {
    return a - b;
  });
  const targetElement = primeArray[primeArray.length - 1];
  const finalResult = generatePascalsTriangleUntilElement(targetElement);

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
  generatePascalsTriangleHTML();

  const missingPrimeNums = primeArray.filter((num) => {
    for (const row of finalResult) {
      if (row.includes(num)) {
        return false;
      }
    }
    return true;
  });
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
});
