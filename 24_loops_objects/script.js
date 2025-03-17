fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

numbers = [1, 2, 3, 4, 5];
sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

names = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"]; // [4, 4, 7, 8, 5]
newNames = [];
for (let i = 0; i < names.length; i++) {
  let nameLength = names[i].length;
  newNames.push(nameLength);
}
console.log(newNames);

var departments = [
  ["Sam", "Ann", "Laura"],
  ["Stefan", "Oliver", "Simon", "Kim"],
  ["Lisa", "Samuel", "Lucas", "Sarah", "Will"],
  ["Mike", "Max", "Angela"],
];
console.log(departments.flat());

sortedDepartments = [];
sortedDepartments = departments.flat().sort();
console.log(sortedDepartments);

function countProperties(person) {
  return Object.keys(person).length;
}

let person = {
  firstName: "Tom",
  lastName: "Smith",
  age: 18,
  profession: "Developer",
};

console.log(countProperties(person));
<script src="script.js"></script>;

function generateRange(n) {
  numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log(generateRange(10));

function findTheBiggestNumber(numbers) {
  let theBiggestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= theBiggestNumber) {
      theBiggestNumber = numbers[i];
    }
  }
  return theBiggestNumber;
}

numbers = [7, 20, 45, 3, 78, 15];
console.log(findTheBiggestNumber(numbers));

function averageGrade(grades) {
  var count = 0;
  var sum = 0.0;
  for (let key in grades) {
    count++;
    sum += grades[key];
  }
  avg = sum / count;
  return avg;
}

grades = {
  math: 10,
  computerScience: 9,
  english: 7,
  physics: 6,
  history: 8,
};
console.log(averageGrade(grades));

let dog = new Object();
dog.name = "Loki";
dog.age = 2;
dog.color = "black";

function makePuppies(puppiesCount) {
  puppies = [];
  for (let i = 1; i <= puppiesCount; i++) {
    puppies.push("Puppy_" + i);
  }
  dog.puppies = puppies;
  return dog;
}

console.log(makePuppies(4));
