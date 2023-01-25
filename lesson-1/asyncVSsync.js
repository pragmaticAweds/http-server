// This is an example of Synchronous code
//In a sychronous code, the code is executed line by line, from top to bottom
console.log("run first");
console.log("run second");

// This is an example of Asynchronous code
//In an Asychronous code, the code is not executed line by line.
setTimeout(() => console.log("run Async first"), 1000);
console.log("run Async second");
