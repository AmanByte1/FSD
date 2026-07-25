const fs = require("fs");

let data = fs.readFileSync("source.txt", "utf8");

fs.writeFileSync("destination.txt", data);

console.log("File copied successfully");