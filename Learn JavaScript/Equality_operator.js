let number_one = 45;
let number_two = "45";

console.log(` == compare value  &  === compare data type with value`);

console.log(
  `number_one is equal to number_two only in case of value and not in a case of data type \n 
  Value of number_one is ${number_one} \n
  Type of number_one is ${typeof number_one} \n
  Value of number_two is ${number_two} \n
  Type of number_two is ${typeof number_two} \n`
);

console.log(
  ` == Comparison number_one == number_two      ${number_one == number_two}`
);
console.log(
  ` === Comparison number_one === number_two    ${number_one === number_two}`
);
