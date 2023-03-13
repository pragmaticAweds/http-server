const { readFileSync } = require("fs");
const path = require("path");
const https = require("https");
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());

require("dotenv").config();

const PORT = 3000;

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

//check if user is logged in

function checkedIsLogggedIn(req, res, next) {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You have to be looged in",
    });
  }
  next();
}

app.get("/auth/google", (req, res) => {});
app.get("/auth/google/callback", (req, res) => {});
app.get("/auth/logout", (req, res) => {});

app.get("/secret", checkedIsLogggedIn, (req, res) => {
  res.send("YOur personal secret value is 42!!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

https
  .createServer(
    {
      key: readFileSync("key.pem"),
      cert: readFileSync("cert.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Port running on ${PORT}`);
  });
