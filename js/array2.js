const students = [
<<<<<<< HEAD
  { name: "Ramesh", paidStatus: false, scholarship: true },
  { name: "Rohan", paidStatus: true, scholarship: true },
  { name: "Rahul", paidStatus: false, scholarship: false },
];

students.forEach((students) => {
  if (students.paidStatus && students.scholarship) {
    console.log(`paid ${students.name} can give exam`); //template literal
  } else {
    console.log(`not paid ${students.name} can not give exam`);
  }
});

console.log(`----------------------------------`);
// *********************** using Map ***************************

students.map((students) => {
  if (students.paidStatus && students.scholarship) {
    console.log(`paid ${students.name} can give exam`); //template literal
  } else {
    console.log(`not paid ${students.name} can not give exam`);
  }
});

/*
=======
  { name: "ramesh", paidStatus: true, scholarship: false },
  { name: "ganga", paidStatus: true, scholarship: false },
  { name: "dinesh", paidStatus: false, scholarship: true },
];
//using foreach
// students.forEach((student) => {
//   if (student.paidStatus && student.scholarship) {
//     console.log(`paid, ${student.name} can give the exam`); //template literal
//   } else {
//     console.log(`not paid, ${student.name} cannot give the exam`); //template literal
//   }
// });

//  using map
students.map((student) => {
  if (!student.paidStatus || !student.scholarship) {
    console.log(`paid, ${student.name} can give the exam`); //template literal
  } else {
    console.log(`not paid, ${student.name} cannot give the exam`); //template literal
  }
});
>>>>>>>

*/
