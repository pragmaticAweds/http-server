const { createServer } = require("http");

const friends = [
  { id: 0, name: "billie" },
  { id: 1, name: "albert" },
  { id: 2, name: "meyang" },
];

const server = createServer((req, res) => {
  const reqPath = req.url.split("/")[1];

  const reqId = +req.url.split("/")[2];
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log("Request:", friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && reqPath === "friend") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    if (reqId) {
      res.end(JSON.stringify(friends[reqId]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method && reqPath === "message") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>hello friend</li>");
    res.write("<li>Hi there, are you good</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const PORT = 9000;

server.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
