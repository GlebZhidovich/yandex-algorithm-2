'use strict';

const fs = require('fs');

function checkComputers(sequence) {
    let groups = 0;
    const x = sequence[1]
        .trim()
        .split(' ')
        .map((val, i) => ({ val: parseInt(val), i }))
        .sort((a, b) => b.val - a.val); // человек
    const y = sequence[2] // компьютеров
        .split(' ')
        .map((val, i) => ({ val: parseInt(val), i: i + 1 }))
        .sort((a, b) => b.val - a.val);
    const result = new Array(x.length).fill(0);

    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            const p = x[i];
            const c = y[j];

            if (p.val + 1 <= c.val) {
                groups += 1;
                result[p.i] = c.i;
                y.splice(j, 1);
                break;
            }
        }
    }
    return [groups, result.join(' ')].join('\n');
}

let fileContent = fs.readFileSync('input.txt', 'utf8');

const sequence = fileContent.toString().trim().split('\n');

const result = checkComputers(sequence);

fs.writeFileSync('output.txt', result.toString());
