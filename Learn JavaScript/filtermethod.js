const transactions = [5817.17, -200, -74, 124, -157.5, 87, -844, 6574, 2148.71];

const deposit = transactions.filter((transaction) => transaction > 0);
console.log(deposit);

const withdraw = transactions.filter((transaction) => transaction < 0);
console.log(withdraw);

const ages = [10, 25, 05, 18, 16, 54, 24, 35, 45];

const checkadult = (age) => age >= 18;

const adult = ages.filter(checkadult);

console.log(adult);
