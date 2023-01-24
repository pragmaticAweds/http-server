const express = require("express");

const messageRoutes = express.Router();

const { getMessages } = require("../controller/messages.controller");

messageRoutes.get("/", getMessages);

module.exports = messageRoutes;
