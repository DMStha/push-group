// Multiplication table of 2 using for loop, forEach and map

let number = 10;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using loop
console.log("Using for loop");
console.log(
  "*****************************************************************"
);
for (let i = 1; i <= arr.length; i++) {
  console.log(number, "x", i, "=", number * i);
}

console.log(
  "--------------------------------------------------------------------"
);

// Using forEach
console.log("Using forEach");
console.log(
  "*****************************************************************"
);
arr.forEach((num) => {
  console.log(number, "x", num, "=", number * num);
});

console.log(
  "--------------------------------------------------------------------"
);

// Using map
console.log("Using map");
console.log(
  "*****************************************************************"
);
arr.map((num) => {
  console.log(number, "x", num, "=", number * num);
});
