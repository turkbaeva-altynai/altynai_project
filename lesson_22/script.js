let number = 0;
number = number % 2 === 0 ? "yes" : "no";
console.log("Is number even?", number);

let isLoggedIn = !!false;
isLoggedIn = isLoggedIn ? "yes" : "no";
console.log("Is user logged in?", isLoggedIn);

let productPrice = 50;
let productQuantity = 270;
let totalPrice = productPrice * productQuantity;
let isProductInStock = true;
totalPrice = isProductInStock
  ? console.log("total price:", totalPrice)
  : console.log("The product is out of stock");

let year = 2024;
year =
  year % 4 === 0
    ? console.log(year, "is leap year")
    : console.log(year, "is not leap year");

// switch case
let country = "DE";
switch (country) {
  case "USA":
    console.log("United States of America");
    break;
  case "DE":
    console.log("Germany");
    break;
  case "FR":
    console.log("France");
    break;
  case "CA":
    console.log("Canada");
    break;
  case "AU":
    console.log("Australia");
    break;
  default:
    console.log("Use the country code above");
    break;
}

let grade = 77;
if (grade >= 97 && grade <= 100) {
  console.log("A+");
} else if (grade >= 93 && grade <= 96) {
  console.log("A");
} else if (grade >= 90 && grade <= 92) {
  console.log("A-");
} else if (grade >= 87 && grade <= 89) {
  console.log("B+");
} else if (grade >= 83 && grade <= 86) {
  console.log("B");
} else if (grade >= 80 && grade <= 82) {
  console.log("B-");
} else if (grade >= 77 && grade <= 79) {
  console.log("C+");
} else if (grade >= 73 && grade <= 76) {
  console.log("C");
} else if (grade >= 70 && grade <= 72) {
  console.log("C-");
} else if (grade >= 67 && grade <= 69) {
  console.log("D+");
} else if (grade >= 63 && grade <= 66) {
  console.log("D");
} else if (grade >= 60 && grade <= 62) {
  console.log("D-");
} else if (grade >= 0 && grade <= 59) {
  console.log("F");
} else {
  console.log("No such grade");
}

function tellFortune(n, z, y, x) {
  console.log(
    "You will be",
    x,
    "in",
    y,
    "and will get married to",
    z,
    "with",
    n,
    "kids."
  );
}

tellFortune(2, "Lucas", "Germany", "Frontend Developer");
tellFortune(1, "Alex", "USA", "Backend Developer");
tellFortune(5, "Robert", "Australia", "UI/UX");

function calculatedDogAge(age) {
  age = age * 7;
  console.log("Your dog is", age, "years old in dog years!");
}

calculatedDogAge(10);
calculatedDogAge(5);
calculatedDogAge(7);

const CalculationSupply = (
  currentAge,
  foodConsumptionPerDayKg,
  maxAge = 100
) => {
  remainingYears = maxAge - currentAge;
  totalFoodRequired = remainingYears * foodConsumptionPerDayKg * 365;
  console.log(
    "You will need",
    totalFoodRequired,
    "kg of food to last until the ripe old age of",
    maxAge,
    "years."
  );
};

CalculationSupply(15, 2);
CalculationSupply(27, 3);
CalculationSupply(78, 2.5, 95);