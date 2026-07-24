const fs = require("fs");

function isKaprekar(num) {
    let square = (num * num).toString();

    for (let i = 1; i < square.length; i++) {
        let left = parseInt(square.substring(0, i)) || 0;
        // consloe.log(left);
        let right = parseInt(square.substring(i)) || 0;

        if (right !== 0 && left + right === num) {
            return true;
        }
    }
    return num === 1;
}

let result = "Kaprekar Numbers (1-1000):\n";

for (let i = 1; i <= 1000; i++) {
    if (isKaprekar(i)) {
        result += i + "\n";
    }
}

fs.writeFileSync("kaprekar.txt", result);

console.log(result);