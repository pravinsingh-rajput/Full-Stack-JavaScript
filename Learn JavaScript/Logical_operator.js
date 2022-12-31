// && and  || or  ! Not

let username = "pravin";
let pin = 1234;
let password = "pravin123";

if (username === "pravin" && pin === 1234) {
  console.log("Login Successful with pin");
} else if (username === "pravin" && pin !== 1234) {
  console.log("Incorrect Password");
} else if (
  (username === "pravin" && password === "pravin123") ||
  pin === 1234
) {
  console.log("Login Successful with Password");
} else {
  console("Not a registerd User");
}
