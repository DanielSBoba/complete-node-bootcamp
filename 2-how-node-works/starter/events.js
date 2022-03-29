const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("sale", () => {
  console.log("new sale!");
});
myEmitter.on("sale", () => {
  console.log("custom!");
});

myEmitter.emit("sale");

// console.log(myEmitter);
