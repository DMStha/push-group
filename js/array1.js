// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let x = "10";
// let y = "10";
// console.log(x==y); //true
// console.log(x===y);// false

// let oddNumber = [];
// let evenNumber = [];
// for (let index = 0; index < number.length; index++) {
//   const num = number[index];
//   if (num % 2 == 0) {
//     evenNumber.push(num);
//   } else {
//     oddNumber.push(num);
//   }
// }
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumber = [];
// const evenNumber = [];

// number.forEach((num) => {
//   if (num % 2 == 0) {
//     evenNumber.push(num);
//   } else {
//     oddNumber.push(num);
//   }
// });
// console.log(oddNumber);
// console.log(evenNumber);

// map function

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumber = [];
// const evenNumber = [];

// number.map((num) => {
//   if (num % 2 == 0) {
//     evenNumber.push(num);
//   } else {
//     oddNumber.push(num);
//   }
// });
// console.log(oddNumber);
//  console.log(evenNumber);

let students = [
  { name: "ram", age: 21, marks: 90 },
  { name: "shyam", age: 20, marks: 80 },
  { name: "hari", age: 15, marks: 60 },
];

// assignment: multiplication table of 2 to 10 using for, forEach, map , filter, reduce, some, every, find, findIndex, sort, sortDesc, join,
// **********************************************Using for Loop********************************************
for (i = 1; i <= 10; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}
console.log(
  "--------------------------------------------------------------------"
);

// ********************************************** Using forEach *******************************************
console.log("Table Of 2");
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
numbers.forEach((num) => {
  console.log(`2 x ${num} = ${2 * num}`);
});

// ********************************************** Using map ***********************************************

console.log("table of 2");
const numbers1 = Array.from({ length: 10 }, (_, i) => i + 1);
numbers1.map((num) => {
  console.log(`2 x ${num} = ${2 * num}`);
});

