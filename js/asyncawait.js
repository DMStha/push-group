// const fetchData = async () => {
//   let response = await fetch("https://jsonplaceholder.org/users");
//   let data = await response.json();
//   console.log("this is data", data);
// };

// fetchData();

const fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.org/users");
    let data = await response.json();
    console.log("this is data", data);
  } catch (error) {
    console.log("error fetching data", data);
  }
};

fetchData();

// assignment git install, git hub account,
