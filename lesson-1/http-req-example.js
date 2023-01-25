//Making a http request to a server with the http module

const { request, get } = require("https");

//using request function from the http module

const req = request("https://www.google.com", (res) => {
  //We create an event emitter function to handle the response

  //Listening to the res with an event listener type of data, which in turn console.log the chunk of data receive
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });

  //The event listener that handles the closing of the response after returning all data
  res.on("end", () => {
    console.log("Request ended");
  });
});

//This is needed to run the request
req.end();

//Using the get method as an alternative without having to call assign the req to a const
get("https://www.google.com", (res) => {
  //We create an event emitter function to handle the response

  //Listening to the res with an event listener type of data, which in turn console.log the chunk of data receive
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });

  //The event listener that handles the closing of the response after returning all data
  res.on("end", () => {
    console.log("Request ended");
  });
});
