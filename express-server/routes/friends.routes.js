const express = require("express");

const friendsRoute = express.Router();

const {
  createFriend,
  getFriend,
  getFriends,
} = require("../controller/friends.controller");

friendsRoute.post("/", createFriend);

friendsRoute.get("/", getFriends);

friendsRoute.get("/:friendId", getFriend);

module.exports = friendsRoute;
