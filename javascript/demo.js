//cnr

function main() {
  var num = 5;
  var r = 3;
  const ans = nCr(num, r);
  console.log(ans);
}
function nCr(n, r) {
  if (n < r) {
    return "Invalid Input";
  }
  const nfact = factorial(n);
  const rfact = factorial(r);
  const n_rfact = factorial(n - r);
  const result = nfact / (rfact * n_rfact);
  return result;
}
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
main();

//store and display

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = new Array(arr1.length);
function store(arr1, arr2, i = 0) {
  if (i == arr1.length) {
    console.log("arr2 : ", arr2);
    return;
  }
  arr2[i] = arr1[i];
  store(arr1, arr2, i + 1);
}
store(arr1, arr2);

//store and display in single array

var n = prompt("Please enter n");
console.log(n);
var arr = new Array(n);

function store(i = 0) {
  if (i == n) {
    console.log("arr : ", arr);
    return;
  }
  var item = prompt("Please enter num");
  console.log(item);
  arr.push(item);
  store(i + 1);
}
store(arr, n);

//function for checking whether the number is prime or not
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
//calculating fibonacci series
function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    let fibArray = fibonacci(n - 1);
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
    return fibArray;
  }
}

//function to get prime numbers from fib series
function getPrimeNumbers(n) {
  const fib = fibonacci(n);
  // console.log("Fibonacci series : ", fib);
  const primeNums = fib.filter((item) => isPrime(item)); //to filter the prime numbers in fibonacci series
  return primeNums;
}

//function  to get the diff of prime numbers in array
function getDiff(primeNums) {
  const diff = [];
  for (let i = 1; i < primeNums.length; i++) {
    diff.push(primeNums[i] - primeNums[i - 1]);
  }
  return diff;
}

//func to find the sum of diff
function Sum(difference) {
  let sum = 0;
  for (let i = 0; i < difference.length; i++) {
    sum = difference[i] + sum;
  }
  return sum;
}
//main function
function main() {
  const primeNumbers = getPrimeNumbers(1001);
  const DiffArr = getDiff(primeNumbers);
  const ans = Sum(DiffArr);
  console.log("Prime numbers in fibbonacci series are : ", primeNumbers);
  console.log("Difference of prime Array : ", DiffArr);
  console.log("Sum : ", ans);
}
main();
