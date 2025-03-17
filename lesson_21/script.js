var weightSarah = 65;
var weightBob = 93;
var heightSarah = 1.75;
var heightBob = 1.89;

var sarahBMI = weightSarah / heightSarah ** 2;
var bobBMI = weightBob / heightBob ** 2;

if (sarahBMI < 18.5) {
  console.log("Sarah is underweight");
} else if (sarahBMI >= 18.5 && sarahBMI <= 25) {
  console.log("Sarah's weight is normal");
}

if (bobBMI < 18.5 || bobBMI > 25) {
  console.log("Bob is underweight or overweight");
} else {
  console.log("Bob's weight is normal");
}
