let userinput = "45";

console.log(`Before conversion type of userinput = 45 is ${typeof userinput}`);
console.log(`Is 45 equal to '45' ${userinput === 45} `);

userinput = Number(userinput);

console.log(`After conversion type of userinput = 45 is  ${typeof userinput}`);
console.log(`Is 45 equal to 45 ${userinput === 45} `);
