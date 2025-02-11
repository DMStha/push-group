function fechData(c) {
  console.log("api is fetching");
  setTimeout(() => {
    c("api fetching successful");
  }, 9000);
}

fechData((m) => {
  console.log(m);
});

console.log("m");
