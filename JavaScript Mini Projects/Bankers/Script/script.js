"use strict";

console.log("Connected");

const accoun1 = {
  owner: "Doctor Strange",
  pin: 1111,
  transactions: [
    100, -250, -3020, 4514, -2541, 6987, 7845, -4697, -1458, 2587, 6547, -200,
    -2456, 1000,
  ],
  interest: 1.2,
};

const accoun2 = {
  owner: "I Am Groot",
  pin: 1001,
  transactions: [
    520, 7850, -1058, 2414, -30000, 8975, 9923, -7584, -241, 25578, 6584, -1575,
  ],
  interest: 1.5,
};

const account3 = {
  owner: "Iron Man",
  pin: 1001,
  transactions: [
    8745, -2245, -7845, 5700, 451000, -1457, 3257, -87469, 78458, 24578, 78945,
    4587, -6784,
  ],
  interest: 2.3,
};

const account = [accoun1, accoun2, account3];

// Importing

// header
const userid = document.querySelector("#id");
const userpin = document.querySelector("#pin");
const login_btn = document.querySelector(".login");

// Main Container
const today_date = document.querySelector(".todaydate");
const total_balance = document.querySelector(".available_balance");

// transctions
const transaction_container = document.querySelector(".transaction-container");
const credited = document.querySelector(".credit");
const debited = document.querySelector(".debit");
const interest = document.querySelector(".interest");
const sort = document.querySelector(".sort");

// Action
// Transfer Money
const transfer_id = document.querySelector("#transferid");
const transfer_amount = document.querySelector("#transferamount");
const transfer_btn = document.querySelector(".transfer");

// Request Loan
const loan = document.querySelector("#loanamount");
const requestloan = document.querySelector(".requestloan");

// Close Account

const confirmuser = document.querySelector("#confirmuser");
const confirpin = document.querySelector("#confirpin");
const closeaccount = document.querySelector(".closeaccount");

// Scripting

// Display Transctions

const displaytransctions = function (transction) {
  transaction_container.innerHTML = "";
  transction.forEach(function (movement, i) {
    const mov = movement > 0 ? "deposit" : "Withdrawal";

    const newtransction =
      mov == "deposit"
        ? `
      <div class="transction flex w-full items-center justify-between border-b-2 pb-3 mb-3 px-8 ">
        <div class="transaction-details flex items-center justify-between">
            <p class="bg-gradient-to-r from-green-400 to-green-500 px-4 py-[1px] rounded-full text-white text-xs md:text-sm"> ${
              i + 1
            } ${mov.toLocaleUpperCase()} </p>
                <p class="mx-4 text-xs">12/01/2023</p>
          </div>
              <p class="font-semibold"> ${Math.abs(
                movement
              )} <span class="currency">$</span> </p>
        </div>
    `
        : `
      <div class="transction flex w-full items-center justify-between border-b-2 pb-3 mb-3 px-8 ">
        <div class="transaction-details flex items-center justify-between">
            <p class="bg-gradient-to-r from-red-400 to-red-500 px-4 py-[1px] rounded-full text-white text-xs md:text-sm"> ${
              i + 1
            } ${mov.toLocaleUpperCase()} </p>
                <p class="mx-4 text-xs">12/01/2023</p>
          </div>
              <p class="font-semibold"> ${Math.abs(
                movement
              )} <span class="currency">$</span> </p>
        </div>
    `;

    transaction_container.insertAdjacentHTML("afterbegin", newtransction);
  });
};

displaytransctions(accoun1.transactions);

// Creating Username

const createusername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createusername(account);

// Total Balance

const displaybalance = function (data) {
  const Balance = data.reduce((acc, mov) => acc + mov, 0);
  total_balance.textContent = `${Balance} $`;
};

displaybalance(accoun1.transactions);
