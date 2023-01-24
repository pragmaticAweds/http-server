const express = require("express");

const app = express();

const path = require("path");

const friendRoute = require("./routes/friends.routes");

const messageRoute = require("./routes/messages.routes");

//setting view engine

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//creating middleware
app.use((req, res, next) => {
  const beforeReqTime = Date.now();
  next();
  const afterReqTime = Date.now() - beforeReqTime;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${afterReqTime}ms`);
});

//middleware for json to parse body content
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My first Template Engine",
    caption: "Yes i get it",
  });
});
app.use("/site", express.static("public"));
app.use("/friends", friendRoute);
app.use("/messages", messageRoute);

app.listen(4000, () => console.log(`Listening to Port ${4000}`));
