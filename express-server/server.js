const express = require("express");

const app = express();

//creating middleware
app.use((req, res, next) => {
  const beforeReqTime = Date.now();
  next();
  const afterReqTime = Date.now() - beforeReqTime;
  console.log(`${req.method} ${req.url} ${afterReqTime}ms`);
});

const friends = [
  { id: 0, name: "Dessy" },
  { id: 1, name: "Badmus" },
  { id: 2, name: "Mozammil" },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Name does not exist",
    });
  }
});

app.get("/message", (req, res) => {
  res.send("<ul><li>I am working</li></ul>");
});

app.post("/message", (req, res) => {
  console.log("sending request");
});

app.listen(4000, () => console.log(`Listening to Port ${4000}`));
