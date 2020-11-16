function sum(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = arr.reduce(reducer);
  //console.log(`sum is ${total}`);
  return total;
}

let array = [1, 3, 5, 7, 9, 0];
console.log(`Sum of array [1, 3, 5, 7, 9, 0]: ${sum(array)}`);

function multiply(arr) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  let total = arr.reduce(reducer);
  //console.log(`Multiplied result is ${total}`);
  return total;
}
console.log(`Multiplication of array [1, 3, 5, 7, 9, 0]: ${multiply(array)}`);

function reverse(str) {
  return [...str].reverse().join("");
}

console.log(`reverse of "CS472" is ${reverse("CS472")}`);

function filterLongWords(arr, i) {
  const result = [...arr].filter((word) => word.length > i);
  return result;
}

const words = [
  "spade",
  "limitless",
  "satelite",
  "arrogant",
  "destruction",
  "pasture",
  "student",
  "maharishi",
];
console.log(`words longer than 8: ${filterLongWords(words, 8)}`);
