let name = "Pravin";
let age = 22;

// if (age >= 18) {
//   console.log(`${name} your are allowed to apply for Driving Licence.`);
// } else {
//   console.log(`${name} your are NOT allowed to apply for Driving Licence.`);
// }

age = 16;

// if (age >= 18) {
//   console.log(`${name} your are allowed to apply for Driving Licence.`);
// } else {
//   console.log(`${name} your are NOT allowed to apply for Driving Licence.`);
// }

if (age >= 18) {
  console.log(`${name} your are allowed to apply for Driving Licence.`);
} else if (age >= 16) {
  console.log(
    `${name} your are allowed to apply for Non Gear Driving Licence.`
  );
} else {
  console.log(`${name} your are Not allowed to apply for Driving Licence.`);
}
