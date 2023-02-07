"use strict";

const accoun1 = {
  owner: "Doctor Strange",
  pin: 1111,
  transactions: [
    100, -250, 96, 4514, -2541.87, 6987, 7845, -4697.37, -1458.2, 2587.71, 6547,
    -200, -2456, 1000,
  ],
  interest: 1.2,
};

const accoun2 = {
  owner: "I Am Groot",
  pin: 2222,
  transactions: [
    520, 7850, -1058.54, 2414, -30000, 8975, 9923, -7584, -241, 25578, 6584,
    -1575,
  ],
  interest: 1.5,
};

const account3 = {
  owner: "Iron Man",
  pin: 3333,
  transactions: [
    8745, -2245.17, -7845, 5700.54, 45102.9, -1457, 3257, -87469, 78458, 24578,
    7894.5, 4587.17, -6784,
  ],
  interest: 2.3,
};

const account = [accoun1, accoun2, account3];

// Importing

// header
const userid = document.querySelector("#id");
const userpin = document.querySelector("#pin");
const login_form = document.querySelector(".login");
const login_btn = document.querySelector(".login-btn");
const welcome_msg = document.querySelector(".welcome");

// Main Container
const today_date = document.querySelector(".todaydate");
const total_balance = document.querySelector(".available_balance");
const banking = document.querySelector(".banking");

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
const transferform = document.querySelector(".transfer-details");

// Request Loan
const loanform = document.querySelector(".loan-form ");
const loan = document.querySelector("#loanamount");
const requestloan_btn = document.querySelector(".requestloan");

// Close Account
const closeform = document.querySelector(".close-form");
const confirmuser = document.querySelector("#confirmuser");
const confirpin = document.querySelector("#confirpin");
const closeaccount_btn = document.querySelector(".closeaccount");

// Scripting

// Update UI

const updateUI = function (acc) {
  // Display Total Balance
  displaybalance(acc);

  // Display transction
  displaytransctions(acc.transactions);

  // Display Summary
  totalinterest(acc);
  totaldebit(acc);
  totalcredit(acc);
};

// Login

let currentuser;

login_btn.addEventListener("click", function (e) {
  e.preventDefault();
  currentuser = account.find((acc) => acc.username === userid.value);

  if (currentuser?.pin === Number(userpin.value)) {
    //Display

    // Welocme Messgae

    welcome_msg.textContent = `Welcome Back, ${currentuser.owner
      .split(" ")
      .join(" ")}`;

    login_form.reset();
    banking.classList.remove("hidden");
    banking.classList.add("flex");

    updateUI(currentuser);
  } else {
    console.log("Incorrect Credentails");
  }
});

// Transfer Money
transfer_btn.addEventListener("click", function (e) {
  e.preventDefault();
  const receiverid = account.find((acc) => acc.username === transfer_id.value);
  const amount = Number(transfer_amount.value);

  if (
    amount > 0 &&
    receiverid &&
    currentuser.balance >= amount &&
    receiverid.username !== currentuser.username
  ) {
    console.log("Transction Approved");
    currentuser.transactions.push(-amount);
    receiverid.transactions.push(amount);
    transferform.reset();
    updateUI(currentuser);
  } else {
    console.log("Transction Not Approved");
    transferform.reset();
  }
});

//Close Account

closeaccount_btn.addEventListener("click", function (e) {
  e.preventDefault();
  const closeuser = confirmuser.value;
  const closeuserpin = Number(confirpin.value);
  if (closeuser === currentuser.username && closeuserpin === currentuser.pin) {
    const closeindex = account.findIndex((acc) => acc.username === closeuser);
    account.splice(closeindex, 1);
    console.log("Account Closed");
    banking.classList.add("hidden");
    banking.classList.remove("flex");
    closeform.reset();
  } else {
    console.log("Incorrect Credentials");
    closeform.reset();
  }
});

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
              <p class="font-semibold"> ${movement} <span class="currency">$</span> </p>
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
              <p class="font-semibold"> ${movement} <span class="currency">$</span> </p>
        </div>
    `;

    transaction_container.insertAdjacentHTML("afterbegin", newtransction);
  });
};

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
  data.balance = data.transactions
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);
  total_balance.textContent = `${data.balance} $`;
};

// Total Credit
const totalcredit = function (data) {
  const allcredits = data.transactions
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);
  credited.textContent = `${allcredits} $`;
};

// Total debit
const totaldebit = function (data) {
  const alldebit = Math.abs(
    data.transactions
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0)
      .toFixed(2)
  );
  debited.textContent = `${alldebit} $`;
};

// total interest
const totalinterest = function (data) {
  const allinterest = data.transactions
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * data.interest) / 100)
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);
  interest.textContent = `${allinterest} $`;
};
