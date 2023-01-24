const friends = require("../models/friends.model");

function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Name does not exist",
    });
  }
}

function createFriend(req, res) {
  const { name } = req.body;

  const newFriend = {
    name,
    id: friends.length,
  };
  if (!name) {
    return res.status(400).json({ error: "invalid content" });
  } else {
    friends.push(newFriend);
    res
      .status(201)
      .json({ message: "friend created successfully", data: newFriend });
  }
}

module.exports = {
  getFriend,
  getFriends,
  createFriend,
};
