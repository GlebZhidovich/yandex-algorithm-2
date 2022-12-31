'use strict';

const fs = require('fs');

function fillLine(sequence) {
    const [amount, ...lines] = sequence.split('\n');
    const sortedLines = lines
        .map((l) => l.split(' ').map((n) => parseInt(n)))
        .sort((a, b) => {
            return a[0] - b[0];
        });
    let [left, right] = sortedLines[0];
    for (let index = 1; index < parseInt(amount); index++) {
        const [l, r] = sortedLines[index];
        left = Math.min(left, l);
        right = Math.min(right, r);
    }
    return Math.abs(right - left);
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim();
const result = fillLine(sequence);
fs.writeFileSync('output.txt', result.join(' ').toString());
