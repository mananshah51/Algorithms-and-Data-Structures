'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;
    var final = [];
    for (let i = 0; i < a.length; i++) { 
        if (a[i] > b[i]) {
            alice = alice + 1;
        }
        else if (a[i] == b[i]) {
            alice = alice + 0;
            bob = bob + 0;
        }
        else { 
            bob = bob + 1;
        }
    }
    final.push(alice);
    final.push(bob);

    return final;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
