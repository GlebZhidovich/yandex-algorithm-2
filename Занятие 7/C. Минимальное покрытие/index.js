'use strict';

const fs = require('fs');

function getMinimumCoverage(sequence) {
    let [m, ...lines] = sequence.split('\n');
    m = parseInt(m);
    const s = 0;

    const result = [];

    const before = [];
    const mid = [];

    for (let index = 0; index < lines.length - 1; index++) {
        const l = lines[index];
        const arr = l.split(' ').map((n) => parseInt(n));
        if (!(arr[0] > m || arr[1] < s)) {
            if (arr[0] <= 0) {
                before.push(arr);
            } else {
                mid.push(arr);
            }
        }
    }

    for (let index = 0; index < before.length; index++) {
        // const [time, hours] = sortedLines[index];
        // const nextTime = time + hours;
    }

    return 'amount';
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim();
const result = getMinimumCoverage(sequence);
fs.writeFileSync('output.txt', result.toString());
