const fs = require("fs");
const crypto = require("crypto");

setTimeout(() => {
  console.log("Timer one finshed!");
});
setTimeout(() => {
  console.log("Timer 2 finshed!");
});
setTimeout(() => {
  console.log("Timer 3 finshed!");
}, 300);

setImmediate(() => console.log("Immidiate 1 finished!"));

fs.readFile("text-file.txt", () => {
  console.log("i/o finished");
});

console.log("hello from top level-code");
