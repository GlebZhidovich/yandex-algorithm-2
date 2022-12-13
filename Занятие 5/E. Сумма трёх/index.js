'use strict';

const fs = require('fs');

function getSumOfThree(brackets) {
    const sum = parseInt(brackets[0]);
    const a = brackets[1].split(' ');
    const b = brackets[2].split(' ');
    const c = brackets[3].split(' ');
    a.shift();
    b.shift();
    c.shift();
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            for (let k = 0; k < c.length; k++) {
                const s = parseInt(a[i]) + parseInt(b[j]) + parseInt(c[k]);
                if (s === sum) {
                    return `${i} ${j} ${k}`;
                }
            }
        }
    }

    return -1;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');

const sequence = fileContent.toString().trim().split('\n');

const result = getSumOfThree(sequence);

fs.writeFileSync('output.txt', result.toString());
