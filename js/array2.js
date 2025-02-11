const students = [
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


