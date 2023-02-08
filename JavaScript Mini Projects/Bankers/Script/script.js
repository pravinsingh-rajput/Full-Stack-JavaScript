"use strict";

const accoun1 = {
  owner: "Doctor Strange",
  pin: 1111,
  transactions: [
    100, -250, 4514, -2541.87, 6987, 7845, -4697.37, -1458.2, 2587.71, 6547,
    -200,
  ],
  transactiondate: [
    "2020-01-18T21:31:17.178Z",
    "2020-02-20T21:31:17.178Z",
    "2020-03-17T21:31:17.178Z",
    "2021-02-20T21:31:17.178Z",
    "2021-05-28T21:31:17.178Z",
    "2021-06-15T21:31:17.178Z",
    "2022-01-24T21:31:17.178Z",
    "2022-07-17T21:31:17.178Z",
    "2022-11-25T21:31:17.178Z",
    "2022-12-12T21:31:17.178Z",
    "2023-01-31T21:31:17.178Z",
  ],
  interest: 1.2,
};

const accoun2 = {
  owner: "I Am Groot",
  pin: 2222,
  transactions: [
    520, 7850, -1058.54, 2414, -30000, 8975, 9923, -7584, -241, 25578, 6584,
  ],
  transactiondate: [
    "2021-01-28T21:31:17.178Z",
    "2021-02-30T21:31:17.178Z",
    "2021-03-19T21:31:17.178Z",
    "2021-03-20T21:31:17.178Z",
    "2021-05-28T21:31:17.178Z",
    "2021-06-25T21:31:17.178Z",
    "2021-07-24T21:31:17.178Z",
    "2021-07-20T21:31:17.178Z",
    "2022-11-30T21:31:17.178Z",
    "2023-01-29T21:31:17.178Z",
    "2023-02-08T21:31:17.178Z",
  ],
  interest: 1.5,
};

const account3 = {
  owner: "Iron Man",
  pin: 3333,
  transactions: [
    8745, -2245.17, -7845, 5700.54, 45102.9, -1457, 3257, -87469, 78458, 24578,
    7894.5,
  ],
  transactiondate: [
    "2021-01-31T11:31:17.178Z",
    "2021-02-28T21:31:17.178Z",
    "2021-05-15T21:31:17.178Z",
    "2022-03-18T21:31:17.178Z",
    "2022-06-26T12:31:17.178Z",
    "2022-06-25T21:31:17.178Z",
    "2022-07-08T21:31:17.178Z",
    "2022-08-09T21:31:17.178Z",
    "2022-11-18T12:31:17.178Z",
    "2023-01-20T11:31:17.178Z",
    "2023-02-04T08:31:17.178Z",
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

// ----------------------------------------------------------------------------------- //
// --------------------------------Login Section-------------------------------------- //
// ----------------------------------------------------------------------------------- //
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

// Display Dates
const logindate = new Date();

const date = `${logindate.getDate()}`.padStart(2, 0);
const month = `${logindate.getMonth() + 1}`.padStart(2, 0);
const year = logindate.getFullYear();
const hour = `${logindate.getHours()}`.padStart(2, 0);
const minute = `${logindate.getMinutes()}`.padStart(2, 0);

today_date.textContent = `${date}/${month}/${year}, ${hour}:${minute} `;

// Display Transctions

const displaytransctions = function (acc, sort = false) {
  transaction_container.innerHTML = "";
  const sortaction = sort
    ? acc.transactions.slice().sort((a, b) => a - b)
    : acc.transactions;

  sortaction.forEach(function (movement, i) {
    const mov = movement > 0 ? "deposit" : "Withdrawal";

    const date = new Date(acc.transactiondate[i]);
    const displaydate = formtingdate(date);

    const newtransction =
      mov == "deposit"
        ? `
      <div class="transction flex w-full items-center justify-between border-b-2 pb-3 mb-3 px-8 ">
        <div class="transaction-details flex items-center justify-between">
            <p class="bg-gradient-to-r from-green-400 to-green-500 px-4 py-[1px] rounded-full text-white text-xs md:text-sm"> ${
              i + 1
            } ${mov.toLocaleUpperCase()} </p>
                <p class="mx-4 text-xs">${displaydate}</p>
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
                <p class="mx-4 text-xs">${displaydate}</p>
          </div>
              <p class="font-semibold"> ${movement} <span class="currency">$</span> </p>
        </div>
    `;

    transaction_container.insertAdjacentHTML("afterbegin", newtransction);
  });
};

// -------------------------------------------------------------------------------------- //
// --------------------------------Action Container-------------------------------------- //
// -------------------------------------------------------------------------------------- //

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
    currentuser.transactiondate.push(new Date().toISOString());
    receiverid.transactions.push(amount);
    receiverid.transactiondate.push(new Date().toISOString());
    transferform.reset();
    updateUI(currentuser);
  } else {
    console.log("Transction Not Approved");
    transferform.reset();
  }
});

// Request Loan

requestloan_btn.addEventListener("click", function (e) {
  e.preventDefault();
  const loanmaount = Number(loan.value);
  if (
    loanmaount > 0 &&
    currentuser.transactions.some((deposits) => deposits >= loanmaount * 0.1)
  ) {
    currentuser.transactions.push(loanmaount);
    currentuser.transactiondate.push(new Date().toISOString());
    loanform.reset();
    updateUI(currentuser);
    console.log("Loan Approved");
  } else {
    console.log("Loan Not Approved");
    loanform.reset();
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

// ------------------------------------------------------------------------------------- //
// --------------------------------Summary Section-------------------------------------- //
// ------------------------------------------------------------------------------------- //

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

// sort
let issorted = true;
sort.addEventListener("click", function (e) {
  e.preventDefault();
  displaytransctions(currentuser.transactions, !issorted);
  issorted = !issorted;
});

// -------------------------------------------------------------------------------------- //
/// --------------------------------Other Functions-------------------------------------- //
// -------------------------------------------------------------------------------------- //

// Update UI
const updateUI = function (acc) {
  // Display Total Balance
  displaybalance(acc);

  // Display transction
  displaytransctions(acc);

  // Display Summary
  totalinterest(acc);
  totaldebit(acc);
  totalcredit(acc);
};

// Date Function
const formtingdate = function (date) {
  // Number of days
  const calnumberofdays = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayspassed = calnumberofdays(date, new Date());
  console.log(dayspassed);

  if (dayspassed === 0) return "Today";
  if (dayspassed === 1) return "Yesterday";
  if (dayspassed <= 7) return `${dayspassed} days Ago`;
  else {
    const day = `${new Date(date).getDate()}`.padStart(2, 0);
    const month = `${new Date(date).getMonth() + 1}`.padStart(2, 0);
    const year = new Date(date).getFullYear();
    return `${day}/${month}/${year}`;
  }
};
