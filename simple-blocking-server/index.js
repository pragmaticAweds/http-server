const express = require("express");

const app = express();

function delay(duration) {
  const startNow = Date.now();
  while (Date.now() - startNow < duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  // functions that can cause event loop to block are
  // 1. JSON.stringify()
  // 2. JSON.parse()
  // 3. arr.sort()
  // 4. crypto functions

  res.send("HI, I am working");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("Ding ding ding!");
});

console.log("Running Server now");

//Creating an instance of the node process by forking the process into different threads to optimize performance using pm2

console.log("Worker process started");
app.listen(8080, () => console.log("Working on port 8080"));
