'use strict';

const fs = require('fs');

function getCats(sequence) {
    let [m, ...lines] = sequence.split('\n');
    m = parseInt(m);
    const s = 0;

    const result = [];

    const mid = [];

    for (let index = 0; index < lines.length - 1; index++) {
        const l = lines[index];
        if (l === '0 0') {
            break;
        }
        const arr = l.split(' ').map((n) => parseInt(n));
        if (!(arr[0] > m || arr[1] < s)) {
            mid.push(arr);
        }
    }

    if (!mid.length) {
        return 'No solution';
    }

    mid.sort((a, b) => a[0] - b[0]);

    let curR = 0;

    let curLine;

    for (let index = 0; index < mid.length; index++) {
        const line = mid[index];
        const [l, r] = line;

        if (!curLine) {
            if (l > curR) {
                return 'No solution';
            } else {
                curLine = line;
                curR = r;
            }
        } else {
            if (l > curR) {
                if (curLine[0] <= curR) {
                    result.push(curLine);
                    curR = curLine[1];
                    curLine = line;
                } else {
                    return 'No solution';
                }
            } else {
                curLine = curLine[1] > line[1] ? curLine : line;
            }
        }

        if (curLine[1] >= m) {
            result.push(curLine);
            return `${result.length}\n${result
                .map((l) => l.join(' '))
                .join(' ')}`;
        }
    }

    return 'No solution';
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim();
const result = getCats(sequence);
fs.writeFileSync('output.txt', result.toString());
