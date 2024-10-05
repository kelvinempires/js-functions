// function that reverses a string using for lop -----1
function reverse(name) {
  let emptyString = "";
  for (let i = name.length - 1; i >= 0; i--) emptyString += name[i];
  return emptyString;
}
console.log(reverse("kelvin"));

// function that count the number in a string-----2
function StringCounting(item) {
  let count = 0;
  for (i = 0; i < item.length; i++) count++;
  return count;
}
console.log(StringCounting("national"));

// function that capitalizes the first letter of each world in a sentence------3
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalizeFirstLetter("canADa"));

// Array
// function to find the minimum and maximum value in an array of numbers-----1
// sort method
const array = [21, 88, 960, 91, 450, 29, 33];
const { min, max } = findMinMax(array);
function findMinMax(array) {
  array.sort((a, b) => a - b);
  return { min: array[0], max: array[array.length - 1] };
}
console.log(min);
console.log(max);
// liner method
// function findMinMax(array) {
//   let min = array[0];
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     } else if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return { min, max };
// }
// const array = [21, 88, 60, 91, 450, 29, 33];
// const { min, max } = findMinMax(array);
// console.log(`Minimum Element: ${min}`);
// console.log(`Maximum Element: ${max}`);

// function that calculate the sum of all element in an array------2
const Array = [1, 2, 3, 2, 3, 44, 5];
let num = 0;
for (let i = 0; i < Array.length; i++) {
  num += Array[i];
}
console.log(num);
// ES6's arrow functions
console.log(
  [1, 7, 945, 3].reduce(function (acc, val) {
    return acc + val;
  }, 0)
);

// function that filters out elements from an array based on a given condition------3
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
// this will filter words that are greater or equal to six in length
function isBigEnough(value) {
  return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// this will filter world that are less than ten from those greater than ten

//Mathematical function
// function that calculate factories of a given Number-----1
let n = 5;
function factorial(n) {
  let ans = 1;
  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

console.log(factorial(n));

// prime number function-------2
function checkPrimeNumber(num) {
  if (num <= 1) return false + " :its not a prim number";
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false + " :its not a prime number";
    }
  }
  return true + ":its a prime number";
}
console.log(checkPrimeNumber(5));

// function that generates the fibonacci sequence up to a given number of terms-----3
function fibonacci(num) {
  let number1 = 0;
  let number2 = 1;
  for (let i = 0; i < num; i++) {
    sum = number1 + number2;
    number1 = number2;
    number2 = sum;
  }
  return number2;
}
console.log(fibonacci(12));