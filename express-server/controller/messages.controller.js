const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "My messages to my friend",
    friend: "Bani",
  });
  //   res.sendFile(path.join(__dirname, "..", "public", "images", "coding.jpg"));
}

module.exports = {
  getMessages,
};
