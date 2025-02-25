const fruits = [];
fruits.push("apple", "banana", "orange");
console.log("Lenght of the fruits is", fruits.length);
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
const removedLastNumber = numbers.pop();
console.log("The last removed element is", removedLastNumber);
const removedFirstNumber = numbers.shift();
console.log("The first removed element is", removedFirstNumber);
//console.log(numbers);

const colors = ["red", "green", "blue", "yellow"];
const elementIndex = colors.indexOf("yellow");
console.log("Index of the green color is", elementIndex);
const includedElement = colors.includes("orange");
console.log(includedElement);

const names = ["John", "Jane", "Mike", "Jennifer"];
//console.log(names);
const newName = names.unshift("David");
console.log(names);
const nameIndex = names.indexOf("Mike");
console.log(nameIndex);

numbers = [2, 4, 6, 6, 10];
const includedNumber = numbers.includes(5);
console.log(includedNumber);
numbers.push(12);
console.log(numbers);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthsCopy = [...months];
const sortedMonths = monthsCopy.sort();
console.log(sortedMonths);

const moreThenThreeLetters = months.filter((month) => month.length > 3);
console.log(moreThenThreeLetters);

console.log(months.slice(6, 11));

const filterMonths = sortedMonths.filter((month) => month.length >= 5);
//console.log(filterMonths);
const strMonths = filterMonths.join("-");
console.log(strMonths);
