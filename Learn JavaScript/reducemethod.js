const transactions = [
  874, -5000.3, 78, 45, -45, -758, 9544, -147, 547, -3000.5,
];

const totalbalance = transactions.reduce(
  (acc, transaction) => acc + transaction,
  0
);

console.log(totalbalance);

const highest = transactions.reduce((acc, transaction) => {
  if (acc > transaction) return acc;
  else return transaction;
}, transactions[0]);

console.log(highest);
