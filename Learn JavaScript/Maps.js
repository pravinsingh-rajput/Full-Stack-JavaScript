const data = new Map();

// Set Value

// data.set("name", "Pravin");
// data.set("dob", "11-01-01");
// data.set(12, "true");
// data.set("temp", "false");

// console.log(data);

// // Get Value
// const name = data.get("name");
// console.log(name);
// // delete

// data.delete("temp");
// console.log(data);
// // has

// console.log(data.has("dob"));

// // Size

// console.log(data.size);

// // Clear

// // data.clear();

// const arr = [10, 12, 13];

// data.set(arr, "Array Data");
// console.log(data);

const quiz = new Map([
  ["Question", "Which one of this is best Programming Language?"],
  [1, "Java"],
  [2, "Python"],
  [3, "JavaScript"],
  [4, "C++"],
  ["Correct", 3],
  [true, "Correct 🎉"],
  [false, "Incorrect ❌"],
]);

// console.log(quiz);

let ans = 4;

const check = quiz.get(quiz.get("Correct") === ans);

console.log(check);
